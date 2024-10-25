import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartItem } from '../../components/CartItems/CartItems';
import { fetchProducts } from '../../apiService';
import { TItemCart, TProductCard } from '../../types/types';

const ShoppingCartContainer = styled.div`
  margin: auto;
  width: 60%;
  padding: 0 3.25rem 3.25rem;
  h2 {
    padding: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
    margin: 0.5rem;
    color: #333333;
  }
  .cart-items {
    margin: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    width: 70%;

    h2{
      font-size: 1.5rem;
    }
    .cart-items {
      margin: auto;
      width: 60%;
    }
  }
  @media (max-width: 475px){
    margin: auto;
    .cart-items {
      width: 90%;
    }
  }
`;
const CartPrice = styled.div`
  text-align: center;
  button {
    padding: 0.8rem;
    text-align: center;
    font-size: 1.1rem;
    transition: all 0.5s ease-in-out;
    background-color: #53e04cad;
    &:hover {
      transform: translateY(-0.25em);
      box-shadow: 0 0 0.5em 0 #5e5e5e;
    }
  }
`;
const TotalPricePrgrph = styled.p`
  padding: 0.625rem;
  font-size: 1.125rem;
  span {
    color: black;
    margin-left: 0.5rem;
    font-weight: 600;
    font-size: 1.3rem;
    @media (max-width: 475px) {
      font-size:1.1rem;
    }
  }
  @media (max-width: 475px) {
      font-size:1rem;
    }
`;

export const ShoppingCart = () =>
{
  const [cartItems, setCartItems] = useState<TItemCart[]>([]);
  const [cartProducts, setCartProducts] = useState<TProductCard[] | []>([]);

  useEffect(() =>
  {
    const fetchCartItems = () =>
    {
      const storedCart = localStorage.getItem('cart');
      if (storedCart)
      {
        const ids = JSON.parse(storedCart);
        setCartItems(ids);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() =>
  {
    const fetchAllProducts = async () =>
    {
      try
      {
        const allProducts = await fetchProducts();

        const selectedProducts: TProductCard[] = allProducts.filter((product) =>
          cartItems.some((item) => item.productID === product.id)
        );
        setCartProducts(selectedProducts);
      } catch (error)
      {
        console.error('Error fetching product data:', error);
      }
    };

    if (cartItems.length > 0)
    {
      fetchAllProducts();
    } else
    {
      setCartProducts([]);
    }
  }, [cartItems]);

  const updateItemQuantity = (productID: number, newQuantity: number) =>
  {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productID === productID ? { ...item, quantity: newQuantity } : item
      )
    );
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const removeItemFromCart = (productID: number) =>
  {
    const updatedCart = cartItems.filter((item) => item.productID !== productID);
    const updatedCartProducts = cartProducts.filter(product => product.id !== productID);

    setCartItems(updatedCart);
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    toast("Товар видалено з кошика!", { type: 'warning' });
  };

  const totalPrice = cartProducts.reduce((total, item) =>
  {
    const cartItem = cartItems.find(cartItem => cartItem.productID === item.id);
    return total + (cartItem ? cartItem.quantity * item.price : 0);
  }, 0);

  let localePrice = totalPrice.toLocaleString("uk-UA", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <ShoppingCartContainer>
        <h2>Кошик</h2>
        {cartProducts.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <div className='cart-items'>
            {cartProducts.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                updateQuantity={updateItemQuantity}
                removeItem={removeItemFromCart}
              />
            ))}
          </div>
        )}
        <CartPrice>
          <TotalPricePrgrph>Загальна сума:<span> {localePrice}&nbsp;</span></TotalPricePrgrph>
          <button>Оформити</button>
        </CartPrice>

      </ShoppingCartContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

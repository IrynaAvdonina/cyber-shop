import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CartItems } from '../../components/CartItems/CartItems';
import { TProductCard } from '../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../apiService';

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

// TODO: взяти з серверу
const productsData = [78, 98, 100, 105];

export const ShoppingCart = () =>
{
  const [cartItems, setCartItems] = useState<TProductCard[] | []>([]);
  const [priceItems, setPriceItems] = useState(0);
  useEffect(() =>
  {
    const fetchAllProducts = async () =>
    {
      try
      {
        const allProducts = await fetchProducts();
        const selectedProducts: TProductCard[] = allProducts.filter((item: TProductCard) => productsData.includes(item.id));
        setCartItems(selectedProducts);
        const totalPrice = selectedProducts.reduce((total, item) => total + item.price, 0);
        setPriceItems(totalPrice);
      } catch (error)
      {
        console.error('Error fetching product data:', error);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <>
      <Header />
      <ShoppingCartContainer>
        <h2>Кошик</h2>
        {cartItems.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItems key={item.id} product={item} />
            ))}
          </div>
        )}
        <CartPrice>
          <TotalPricePrgrph>Загальна сума:<span> {priceItems.toFixed(2)}&nbsp;грн.</span></TotalPricePrgrph>
          <button>Оформити</button>
        </CartPrice>
      </ShoppingCartContainer>
      <Footer />
    </>
  )
}
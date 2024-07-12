import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { CartItems } from '../../components/CartItems/CartItems'
import { TProductCard } from '../../components/ProductCard/ProductCard';
import './ShoppingCart.css'

// TODO: взяти з серверу
const productsData = [2, 5, 13, 10];

export const ShoppingCart = () =>
{
  const [cartItems, setCartItems] = useState<TProductCard[] | []>([]);
  const [priceItems, setPriceItems] = useState(0);
  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const selectedProducts: TProductCard[] = data.products.filter((item: TProductCard) => productsData.includes(item.id));
        setCartItems(selectedProducts);
        const totalPrice = selectedProducts.reduce((total, item) => total + item.price, 0);
        setPriceItems(totalPrice);
      } catch (error)
      {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="shopping-cart">
        <h2>Кошик</h2>
        {cartItems.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (

          <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItems key={item.id} product={item} />
            ))}
          </div>

        )}<div className="cart-price">
          <p className='total-price'>Загальна сума:<span> {priceItems.toFixed(2)} грн.</span></p>
          <button>Оформити замовлення</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
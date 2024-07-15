import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Header } from '../../components/Header/Header';
import { MainBanner } from '../../components/MainBanner/MainBanner';
import { CategoryBanner } from '../../components/CategoryBanner/CategoryBanner';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { Footer } from '../../components/Footer/Footer';
import { TProductCard } from '../../components/ProductCard/ProductCard';

const NewProductBanner = styled.div`
  display: flex;
  padding: 1.5rem 10rem;
  flex-direction: column;
  h2 {
    font-size: 1.5rem;
  } 
`;


export function HomePage()
{
  const [products, setProducts] = useState<TProductCard[]>([]);

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        // TODO: зробити одне підключення і брати інфу звідти
        const response = await fetch('https://dummyjson.com/products?skip=10');
        const data = await response.json();
        console.log(data);
        const topProducts = data.products.slice(0, 9);
        setProducts(topProducts);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MainBanner />
      <CategoryBanner />
      <NewProductBanner>
        <h2>Новинки</h2>
        <ProductCardList products={products} />
      </NewProductBanner>
      <Footer />
    </>
  )
}


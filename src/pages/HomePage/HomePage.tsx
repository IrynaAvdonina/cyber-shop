import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Header } from '../../components/Header/Header';
import { MainBanner } from '../../components/MainBanner/MainBanner';
import { CategoryBanner } from '../../components/CategoryBanner/CategoryBanner';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { Footer } from '../../components/Footer/Footer';
import { TProductCard } from '../../components/ProductCard/ProductCard';// перенести в файл з типами
import { fetchProducts } from './../../apiService';


const NewProductBanner = styled.div`
  display: flex;
  padding: 1.5rem 10vw;
  flex-direction: column;
  h2 {
    font-size: 1.5rem;
  } 
  @media (max-width: 768px) {
    padding: 1.2rem 3rem;
    align-items: center;
    h2 {
      font-size: 1.25rem;
    }
  }
`;


export function HomePage()
{
  const [products, setProducts] = useState<TProductCard[]>([]);

  useEffect(() =>
  {
    const fetchTopProduct = async () =>
    {
      try
      {
        const topProducts = await fetchProducts(9);
        setProducts(topProducts);
      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopProduct();
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


import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { MainBanner } from '../../components/MainBanner/MainBanner';
import { CategoryBanner } from '../../components/CategoryBanner/CategoryBanner';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { TProductCard } from '../../types/types';
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
      <MainBanner />
      <CategoryBanner />
      <NewProductBanner>
        <h2>Новинки</h2>
        <ProductCardList products={products} />
      </NewProductBanner>
    </>
  )
}


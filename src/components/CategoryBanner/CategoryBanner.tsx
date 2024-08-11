import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import categorySmartphones from '../../assets/category-smartphones.png';
import categoryLaptops from '../../assets/category-laptops.png';
import categoryMobAcs from '../../assets/category-mobacs.png';
import categorySmWatches from '../../assets/category-smart-watches.png';
import categoryHeadphones from '../../assets/category-headphones.png';
import unknownCategory from '../../assets/unknown-category_2.svg';
import { fetchCategories } from './../../apiService';


const categoryImages: Record<string, string> = {
  smartphones: categorySmartphones,
  laptops: categoryLaptops,
  'mobile-accessories': categoryMobAcs,
  'mens-watches': categorySmWatches,
  tablets: categoryHeadphones,//
};

const CategoryBannerContainer = styled.div`
  display: flex;
  padding: 3.125rem 10rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    padding: 1.6rem 3rem;
    align-items: center;
    h2 {
    font-size: 1.25rem;
    }
  }
  @media (max-width: 475px) {
    padding: 1rem 1.5rem;
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 12rem;
  padding: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  img {
    height: auto;
    margin-bottom: 1rem;
    width: 4rem;
  }
  p {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    width: 10rem;
    padding: 0.75rem;

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 475px) {
    width: 8rem;
    padding: 0.5rem;
  }
`;

export function capitalize(string: string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const CategoryBanner = () =>
{
  const [categories, setCategories] = useState<string[] | []>([]);

  useEffect(() =>
  {
    const fetchTopCategories = async () =>
    {
      try
      {
        const topCategories: string[] = await fetchCategories(5);
        setCategories(topCategories);
      } catch (error)
      {
        console.error('Error fetching categories:', error);
      }
    };

    fetchTopCategories();
  }, []);


  return (
    <CategoryBannerContainer>
      <h2>Шукати за категорією</h2>
      <CategoryList>
        {categories.length > 0 ? (
          categories.map(category => (
            <CategoryItem key={category} href={`/category/${category}`}>
              <img src={categoryImages[category] || unknownCategory} alt={category} />
              <p>{capitalize(category)}</p>
            </CategoryItem>
          ))
        ) : (
          <p>Поки категорій немає :(</p>
        )}
      </CategoryList>
    </CategoryBannerContainer>)
};

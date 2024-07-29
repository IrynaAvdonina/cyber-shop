import React, { useState, useEffect } from 'react';
import categorySmartphones from '../../assets/category-smartphones.png';
import categoryLaptops from '../../assets/category-laptops.png';
import categoryCameras from '../../assets/category-cameras.png';
import categorySmWatches from '../../assets/category-smart-watches.png';
import categoryHeadphones from '../../assets/category-headphones.png';

import styled from '@emotion/styled';

// TODO: брати категорії з сервера
// const categories = [
//   {
//     id: 1,
//     name: 'Смартфони',
//     image: categorySmartphones,
//     link: '/categories/smartfoni',
//   },
//   {
//     id: 2,
//     name: 'Ноутбуки',
//     image: categoryLaptops,
//     link: '/categories/noutbuki',
//   },
//   {
//     id: 3,
//     name: 'Фотоапарати',
//     image: categoryCameras,
//     link: '/categories/fototehnika',
//   },
//   {
//     id: 4,
//     name: 'Smart годинники',
//     image: categorySmWatches,
//     link: '/categories/smart-watches',
//   }, {
//     id: 5,
//     name: 'Навушники',
//     image: categoryHeadphones,
//     link: '/categories/audiotehnika',
//   },
// ];

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

export const CategoryBanner = () =>
{
  const [categories, setCategories] = useState<string[] | []>([]);

  useEffect(() =>
  {
    const fetchCategories = async () =>
    {
      const responseProducts = await fetch(`https://dummyjson.com/products/category-list`);
      const categoriesList: string[] = await responseProducts.json();
      setCategories(categoriesList.slice(0, 5));
    };

    fetchCategories();
  }, []);


  return (
    <CategoryBannerContainer>
      <h2>Шукати за категорією</h2>
      <CategoryList>
        {categories.length > 0 ? (
          categories.map(category => (
            <CategoryItem key={category} href={`/category/${category}`}>
              <img src={categorySmartphones} alt={category} />
              <p>{category}</p>
            </CategoryItem>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </CategoryList>
    </CategoryBannerContainer>)
};

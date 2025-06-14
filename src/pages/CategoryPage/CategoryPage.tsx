import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { TProductCard } from '../../types/types';;
import { capitalize } from './../../components/CategoryBanner/CategoryBanner';
import { fetchCategories, fetchProductsByUrl } from './../../apiService';


const CategoriesContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CategoriesFilter = styled.div`
  padding: 1.25rem;
  margin-left: 3rem;
  flex: 1;

  p {
    font-size: 1.1rem;
  } 
  @media (max-width: 768px) {
    margin-left: 0;
    p {
    font-size: 0.95rem;
    } 
  }
`;

const CategoriesItems = styled.ul`
  display: flex;
  padding: 1.875rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  li {
    padding: 0.5rem;
    list-style: none;
  }
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const CategoryFilterBtn = styled.button<{ selected?: boolean }>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  border-bottom: 2px  ${({ theme }) => theme.colors.accentPrimary} solid;

  &:hover {
    background-color:  ${({ theme }) => theme.colors.buttonBackground};
  }

  ${({ selected }) =>
    selected &&
    `
    font-weight: 600;
    color: #8685EF;
  `}
`;

const CategoriedProducts = styled.div`
  margin-right: 8%;
  flex: 3;
  h3 {
    margin: 2rem 2rem 1rem;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    justify-content: space-evenly;
  }
`;

export const CategoryPage = () =>
{
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const { categoryParam } = useParams();
  const { search } = useLocation();
  const [products, setProducts] = useState<TProductCard[]>([]);

  const navigate = useNavigate();

  useEffect(() =>
  {
    const fetchAllCategories = async () =>
    {
      const dataCategories: string[] = await fetchCategories();
      if (dataCategories)
      {
        setCategories(dataCategories);
      }
    };

    fetchAllCategories();
  }, []);

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      const queryParams = new URLSearchParams(search);
      const searchQuery = queryParams.get('search');
      let url = 'https://dummyjson.com/products?limit=0';

      if (searchQuery)
      {
        url = `https://dummyjson.com/products/search?q=${searchQuery}`;
        setSelectedCategory('');
      } else if (categoryParam)
      {
        const decodedCategory = categoryParam.replace(/_/g, ' ');
        url = `https://dummyjson.com/products/category/${decodedCategory}`;
        setSelectedCategory(decodedCategory);
      }

      let productsByUrl = await fetchProductsByUrl(url);
      setProducts(productsByUrl);
    };

    fetchProducts();
  }, [categoryParam, search]);

  const handleCategoryChange = (category: string) =>
  {
    if (selectedCategory === category)
    {
      setSelectedCategory('');
      navigate(`/categories`);

      return;
    }
    setSelectedCategory(category);
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <>
      <CategoriesContent>
        <CategoriesFilter>
          <p>Виберіть категорію товарів:</p>
          <CategoriesItems>
            {categories.map((category, index) => (
              <li key={index}>
                <CategoryFilterBtn
                  selected={category === selectedCategory}
                  onClick={() => handleCategoryChange(category)}>
                  {capitalize(category)}
                </CategoryFilterBtn>
              </li>
            ))}
          </CategoriesItems>
        </CategoriesFilter>
        <CategoriedProducts>
          {selectedCategory && <h3>{capitalize(selectedCategory)}</h3>}
          {products.length !== 0 ? <ProductCardList products={products} /> : <h3>Товарів не знайдено</h3>}
        </CategoriedProducts>
      </CategoriesContent>
    </>
  );
};
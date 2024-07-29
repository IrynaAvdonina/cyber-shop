import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { transliterate } from 'transliteration';
import styled from '@emotion/styled';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { TProductCard } from '../../components/ProductCard/ProductCard';

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
  border: none;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  
  border-bottom: 2px #8685EF solid;

  &:hover {
    background-color: #e0e0e0;
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
    justify-content: space-evenly
  }
`;

export const CategoryPage = () =>
{
  const [categories, setCategories] = useState<string[] | []>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | ''>('');
  const { categoryParam } = useParams();
  const [products, setProducts] = useState<TProductCard[]>([]);

  const navigate = useNavigate();

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const responseCategories = await fetch('https://dummyjson.com/products/category-list');
        const dataCategories = await responseCategories.json();

        setCategories(dataCategories);

        if (categoryParam)
        {
          const decodedCategory = categoryParam.replace(/_/g, ' ');
          console.log(decodedCategory)
          //!! прибрати ! в category!
          // const filteredProducts = data.products.filter((product: TProductCard) => transliterate(product.category!).toLowerCase() === decodedCategory.toLowerCase());

          const responseProducts = await fetch(`https://dummyjson.com/products/category/${decodedCategory}`);
          const filteredProducts = await responseProducts.json();

          setProducts(filteredProducts.products);
        }
        else
        {
          const responseProducts = await fetch('https://dummyjson.com/products');
          const data = await responseProducts.json();

          setProducts(data.products);
        }

      } catch (error)
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryParam]);

  useEffect(() =>
  {
    console.log('Filtered Products:', products);
  }, [products]);

  const handleCategoryChange = (category: string) =>
  {
    const transliteratedCategory = transliterate(category, { unknown: '_' });
    setSelectedCategory(category);
    navigate(`/category/${transliteratedCategory.toLowerCase()}`);
  };

  return (
    <>
      <Header />
      <CategoriesContent>
        <CategoriesFilter>
          <p>Виберіть категорію товарів:</p>
          <CategoriesItems>
            {categories.map((category, index) => (
              <li key={index}>
                <CategoryFilterBtn
                  // className={`btn-category ${category === selectedCategory ? 'selected' : ''}`}
                  selected={category === selectedCategory}

                  onClick={() => handleCategoryChange(category)}>
                  {category}
                </CategoryFilterBtn>
              </li>
            ))}
          </CategoriesItems>
        </CategoriesFilter>
        <CategoriedProducts>
          {selectedCategory ? (
            <h3>{selectedCategory}</h3>) : null}
          <ProductCardList products={products} />

        </CategoriedProducts>
      </CategoriesContent>
      <Footer />
    </>
  )
}


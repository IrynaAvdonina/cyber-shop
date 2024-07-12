import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { transliterate } from 'transliteration';
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import ProductCardList from '../../components/ProductCardList/ProductCardList'
import { TProductCard } from '../../components/ProductCard/ProductCard';
import './CategoryPage.css'

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
      <div className='categories-content'>
        <div className='categories-filter'>
          <p>Виберіть категорію товарів:</p>
          <ul className='categories-items'>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`btn-category ${category === selectedCategory ? 'selected' : ''}`}
                  onClick={() => handleCategoryChange(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='categoried-products'>
          <h3>{selectedCategory}</h3>

          <ProductCardList products={products} />

        </div>
      </div>
      <Footer />
    </>
  )
}


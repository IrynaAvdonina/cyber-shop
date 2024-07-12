import React, { useState, useEffect } from 'react';
import categorySmartphones from '../../assets/category-smartphones.png';
import categoryLaptops from '../../assets/category-laptops.png';
import categoryCameras from '../../assets/category-cameras.png';
import categorySmWatches from '../../assets/category-smart-watches.png';
import categoryHeadphones from '../../assets/category-headphones.png';
import './CategoryBanner.css';

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

export const CategoryBanner = () =>
{
  const [categories, setCategories] = useState<string[] | []>([]);

  useEffect(() =>
  {
    const fetchCategories = async () =>
    {
      const responseProducts = await fetch(`https://dummyjson.com/products/category-list`);
      const categoriesList: string[] = await responseProducts.json();
      console.log(categoriesList)
      setCategories(categoriesList.slice(0, 5));
    };

    fetchCategories();
  }, [categories]);


  return (
    <div className="category-banner">
      <h2>Шукати за категорією</h2>
      <div className="category-list">
        {categories.map(category => (
          <a className="category-item" key={category} href={`/category/${category}`}>
            <img src={categorySmartphones} alt={category} />
            <p>{category}</p>
          </a>
        ))}
      </div>
    </div>)
};

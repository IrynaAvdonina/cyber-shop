import axios from 'axios';
import { TProduct, TProductCardList, TProductCard } from './types/types';

const selectedCategories = ['smartphones', 'laptops', 'mobile-accessories', 'mens-watches', 'tablets'];

// CategoryBanner.tsx   CategoryPage.tsx 

export const fetchCategories = async (topNumber?: number) =>
{
  const categoriesList: string[] = await myCustomFetch('https://dummyjson.com/products/category-list');
  const filteredCategories: string[] = filterCategories(categoriesList);
  return topNumber ? filteredCategories.slice(0, topNumber) : filteredCategories;
};



export const fetchProductsByUrl = async (url: string) =>
{
  const productsByUrl: TProductCardList = await myCustomFetch(url);
  return filterProducts(productsByUrl.products);
};

//HomePage   +   ShoppingCart

export const fetchProducts = async (topNumber?: number) =>
{
  const topProducts: TProductCardList = await myCustomFetch(`https://dummyjson.com/products?limit=0`);
  const filteredProducts = filterProducts(topProducts.products);

  return topNumber ? filteredProducts.slice(0, topNumber) : filteredProducts;
};

//ProductPage

export const fetchProduct = async (id: string) =>
{
  const product: TProduct = await myCustomFetch(`https://dummyjson.com/products/${id}`);
  return product;
};

const myCustomFetch = async (url: string) =>
{
  try
  {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  }
  catch (error)
  {
    console.error('Error fetching:', error);
    return null;
  }
}

const filterCategories = (categoriesList: string[]) =>
{
  return categoriesList.filter(category => selectedCategories.includes(category));
};

const filterProducts = (productList: TProductCard[]) =>
{
  return productList.filter(product => selectedCategories.includes(product.category!));
};
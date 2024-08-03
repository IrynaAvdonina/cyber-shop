import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Product, ProductContent } from '../../components/ProductContent/ProductContent';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const ProductPage = () =>
{
  let { id } = useParams<Record<string, string>>();
  if (id === undefined)
  {
    return <div>Error: ID is missing</div>;
  }
  let productId: number = parseInt(id, 10);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const selectedProduct = await response.data;
        setProduct(selectedProduct);
      } catch (error)
      {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [productId]);
  return (
    <>
      <Header />
      {product && (
        <ProductContent
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          dimensions={product.dimensions}
          stock={product.stock}
          brand={product.brand}
          sku={product.sku}
          weight={product.weight}
          images={product.images}
        />
      )}
      <Footer />
    </>
  )
}
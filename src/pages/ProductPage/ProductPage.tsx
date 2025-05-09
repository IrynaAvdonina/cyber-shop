import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductContent } from '../../components/ProductContent/ProductContent';
import { TProduct as Product } from '../../types/types';

import { fetchProduct } from './../../apiService';

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
    const fetchSelectedProduct = async () =>
    {
      try
      {
        const selectedProduct: Product = await fetchProduct(id);
        setProduct(selectedProduct);
      } catch (error)
      {
        console.error('Error fetching product data:', error);
      }
    };
    fetchSelectedProduct();
  }, [productId]);
  return (
    <>
      {product && (
        <ProductContent
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          description={product.description}
          rating={product.rating}
          stock={product.stock}
          availabilityStatus={product.availabilityStatus}
          returnPolicy={product.returnPolicy}
          shippingInformation={product.shippingInformation}
          warrantyInformation={product.warrantyInformation}
          images={product.images}
        />
      )}
    </>
  )
}
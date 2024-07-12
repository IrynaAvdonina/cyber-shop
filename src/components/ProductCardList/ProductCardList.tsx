import React from 'react';
import { ProductCard, TProductCard } from '../ProductCard/ProductCard';
import './ProductCardList.css';

interface ProductCardListProps
{
  products: TProductCard[];
}

const ProductCardList = ({ products }: ProductCardListProps) =>
{
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} className="product" />
      ))}
    </div>
  );
};
export default ProductCardList;




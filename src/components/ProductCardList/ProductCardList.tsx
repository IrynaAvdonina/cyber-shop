import React from 'react';
import styled from '@emotion/styled';
import { ProductCard, TProductCard } from '../ProductCard/ProductCard';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  padding: 1rem;
  gap: 2rem;
`;

interface ProductCardListProps
{
  products: TProductCard[];
}

const ProductCardList = ({ products }: ProductCardListProps) =>
{
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};
export default ProductCardList;




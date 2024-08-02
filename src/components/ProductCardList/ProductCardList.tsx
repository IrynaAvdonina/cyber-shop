import React from 'react';
import styled from '@emotion/styled';
import { ProductCard, TProductCard } from '../ProductCard/ProductCard';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, auto));
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(13rem, 17rem));
  }
  @media (max-width: 475px) {
    justify-content: center;
    grid-template-columns: minmax(13rem, 16.25rem);
  }
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




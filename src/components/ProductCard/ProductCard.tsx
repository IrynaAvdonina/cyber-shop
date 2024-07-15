import React from 'react';
import styled from '@emotion/styled';

const ProductCardContainer = styled.div`
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;

.product-card-name {
  text-decoration: none;
  color: black;
}
.img-container {
  width: 100%;
}
img {
  width: 100%;
  object-fit: contain;
  height: 100%;
}
button{
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  }
`;

export type TProductCard = {
  id: number,
  title: string,
  price: number,
  stock?: number,
  sku: string,
  category?: string,
  thumbnail: string,
  images: string[]
}

interface ProductCardProps
{
  product: TProductCard;
}

export const ProductCard = ({ product }: ProductCardProps) =>
{
  const { id, title, price, thumbnail, images } = product;

  return (
    <ProductCardContainer>
      <div className="img-container">
        <a href={`/products/${id}`} className="product-card-name">
          <img src={thumbnail} alt={title} className="product-card-image thumbnail" />
        </a>
      </div>

      <div className="product-card-details">
        <a href={`/products/${id}`} className="product-card-name">{title}</a>
        <p className="product-card-price">{price} ₴</p>
        <button className="add-to-cart-button">Додати до кошика</button>
      </div>
    </ProductCardContainer>
  );
};

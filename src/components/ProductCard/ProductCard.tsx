import React from 'react';
import styled from '@emotion/styled';
import { TItemCart } from '../../pages/ShoppingCart/ShoppingCart';

const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;

  .product-card-name {
    text-decoration: none;
    color: black;
  }
  .img-container {
    width: 80%;
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
    &:hover {
      transform: translateY(-0.25em);
    }
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

  const handleClick = () =>
  {
    const storedCart = localStorage.getItem('cart');
    const cart: TItemCart[] = storedCart ? JSON.parse(storedCart) : [];

    const existingItem = cart.find((item: TItemCart) => item.productID === id);

    if (!existingItem)
    {
      cart.push({ productID: id, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

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
        <button onClick={() => handleClick()} className="add-to-cart-button">Додати до кошика</button>
      </div>
    </ProductCardContainer>
  );
};

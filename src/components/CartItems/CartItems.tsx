import React from 'react';
import styled from '@emotion/styled';

import { TProductCard } from '../ProductCard/ProductCard';

const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.25rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  align-items: center;
  a {
    text-decoration: none;
  }
  img {
    height: 100%;
    max-height: 10rem;
    margin-right: 0.625rem;
    object-fit: contain;
  }
  .item-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 1rem;
    gap: 1rem;
  }
  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
  }
  p {
    padding: 0.625rem;
    font-size: 1rem;
    color: #333;
  }
  .item-price {
    font-size: 1.25rem;
  }
  .btn-delete {
    padding: 0.2rem 0.5rem;
    background-color: rgb(251, 100, 100);
    color: #fff;
    transition: background-color 0.3s ease;
    :hover {
      background-color: rgb(230, 80, 80);
    }
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;
  button {
    padding: 0.3rem 0.7rem;
    text-align: center;
    background-color: #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #c8c8c8;
    }
  }
`;

interface CartItemsProps
{
  product: TProductCard
}

export const CartItems = ({ product }: CartItemsProps) => (
  <CartItem>
    <a href={`/products/${product.id}`}>
      <img src={product.thumbnail} alt={product.title} />
    </a>
    <div className="item-details">
      <a href={`/products/${product.id}`}>
        <h4>{product.title}</h4>
      </a>
      <QuantityContainer>
        <button className="btn-decrease">-</button>
        <span className="item-quantity">1</span>
        <button className="btn-increase">+</button>
      </QuantityContainer>

    </div>
    <p className="item-price" >{product.price} грн.</p>
    <button className="btn-delete">×</button>
  </CartItem>
);
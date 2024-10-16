import React from 'react';
import styled from '@emotion/styled';
import { TProductCardProps, TItemCart } from '../../types/types';
import { Link } from 'react-router-dom';

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
    transition: all 0.2s ease-out;
    &:hover {
      transform: translateY(-0.25em);
    }
  }
`;

export const ProductCard = ({ product }: TProductCardProps) =>
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
        <Link to={`/products/${id}`} className="product-card-name">
          <img src={thumbnail} alt={title} className="product-card-image thumbnail" />
        </Link>
      </div>

      <div className="product-card-details">
        <Link to={`/products/${id}`} className="product-card-name">{title}</Link>
        <p className="product-card-price">{price} ₴</p>
        <button onClick={() => handleClick()} className="add-to-cart-button">Додати до кошика</button>
      </div>
    </ProductCardContainer>
  );
};

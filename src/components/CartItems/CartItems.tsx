import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { TCartItemsProps, TItemCart } from '../../types/types';


const CartItemDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.25rem;
  padding: 0.5rem;
  border: 1px solid  ${({ theme }) => theme.colors.border};
  border-radius: 15px;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    img {
      height: 100%;
      max-height: 10rem;
      object-fit: contain;
    }
  }
  .item-price {
    padding: 0.625rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.25rem;
    font-weight: 500;
    width: 6.25rem;
  }
  .btn-delete {
    padding: 0.2rem 0.5rem;
    background-color:  ${({ theme }) => theme.colors.criticalPrimary};
    color: ${({ theme }) => theme.colors.textOnDark};
    transition: background-color 0.3s ease;
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    &:hover {
      background-color:  ${({ theme }) => theme.colors.criticalSecondary};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    .item-price {
      font-size: 1rem;
      padding: 0;
    }
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 1rem;
  gap: 1rem;
  width: 10.625rem;
  h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
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
    background-color:  ${({ theme }) => theme.colors.buttonBackground};
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHover};
    }
  }
`;

export const CartItem = ({ product, updateQuantity, removeItem }: TCartItemsProps) =>
{
  const storedCart = localStorage.getItem('cart');
  const cart: TItemCart[] = storedCart ? JSON.parse(storedCart) : [];
  const productItem: TItemCart = cart.find((item: TItemCart) => item.productID == product.id)!;
  const [productQuantity, setProductQuantity] = useState(productItem?.quantity);

  const handleClick = () =>
  {
    removeItem(product.id);
  }
  let itemPrice = (product.price * productQuantity).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <CartItemDiv>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <ItemDetails>
        <Link to={`/products/${product.id}`}>
          <h4>{product.title}</h4>
        </Link>
        <QuantityContainer>
          <button className="btn-decrease"
            onClick={() =>
            {
              if (productQuantity > 1)
              {
                setProductQuantity(prev => prev - 1);
                updateQuantity(product.id, productQuantity - 1);
              }
            }}>-</button>
          <span className="item-quantity">{productQuantity}</span>
          <button className="btn-increase"
            onClick={() =>
            {
              setProductQuantity(prev => prev + 1);
              updateQuantity(product.id, productQuantity + 1);
            }}>+</button>
        </QuantityContainer>

      </ItemDetails>
      <p className="item-price" >{itemPrice}</p>
      <button className="btn-delete" onClick={handleClick}>×</button>
    </CartItemDiv>

  );
};

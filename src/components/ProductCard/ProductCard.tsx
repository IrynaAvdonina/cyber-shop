import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TProductCardProps, TItemCart } from '../../types/types';

const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid  ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease-out;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;

  .product-card-name {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .img-container {
    width: 80%;
  }
  img {
    width: 100%;
    object-fit: contain;
    height: 100%;
  }
  button {
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    transition: all 0.2s ease-out;
    &:hover {
      transform: translateY(-0.25em);
    }
  }
  &:hover {
    border: 1px  ${({ theme }) => theme.colors.borderSecondary} solid;
    transform: translateY(-0.25em);
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
    //TODO перенести компонент тостера в окремтй
    localStorage.setItem('cart', JSON.stringify(cart));
    toast('Товар додано до кошика!', {
      type: 'success',
    }
    );
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
        <button onClick={handleClick} className="add-to-cart-button">Додати до кошика</button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
      </div>
    </ProductCardContainer>
  );
};

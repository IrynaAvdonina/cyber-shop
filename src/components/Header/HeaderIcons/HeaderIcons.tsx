import React from 'react';
import cartIcon from './../../../assets/cart.png';
import accountIcon from './../../../assets/user.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  a {
    padding: 0.625rem;
    border-radius: 1.5rem;
    background: white;
    transition: all 0.3s ease-in-out;
    &:hover{
      background: radial-gradient(circle, rgba(192, 185, 192, 0.608) 35%, transparent);
    }
    img{
      width: 2rem;
    }
  }
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const HeaderIcons = () => (
  <HeaderIconsContainer>
    <Link to="/shoppingCart" aria-label="Go to Shopping Cart">
      <img src={cartIcon} alt="Shopping Cart icon" />
    </Link>
    <Link to="/account" aria-label="Go to My Account">
      <img src={accountIcon} alt="My Account icon" />
    </Link>
  </HeaderIconsContainer>
);

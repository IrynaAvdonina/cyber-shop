import React from 'react';
import cartIcon from './../../../assets/cart.png';
import changeThemeIcon from './../../../assets/dark-theme-icon.svg';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  a, button {
    padding: 0.5rem 0.625rem;
    border-radius: 1.5rem;
    //background: white;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
      opacity: 0.8;
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
    <button >
      <img src={changeThemeIcon} alt="Icon Change Theme" />
    </button>

  </HeaderIconsContainer>
);

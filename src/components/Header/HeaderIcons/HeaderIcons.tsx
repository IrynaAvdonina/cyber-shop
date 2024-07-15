import React from 'react'
import cartIcon from './../../../assets/cart.png';
import accountIcon from './../../../assets/user.png';
import styled from '@emotion/styled';

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
  }
`;

export const HeaderIcons = () => (
  <HeaderIconsContainer>
    <a href="/shoppingCart">
      <img src={cartIcon} alt="Shopping Cart" />
    </a>
    <a href="/account">
      <img src={accountIcon} alt="My Account" />
    </a>
  </HeaderIconsContainer>
);

/// <reference types="vite-plugin-svgr/client" />

import React, { useContext, useRef } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import CartIcon from './../../../assets/cart.svg?react';
import ChangeThemeIcon from './../../../assets/dark-theme-icon.svg?react';
import { useTheme } from './../../../context/ThemeContext';

const HeaderIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  a, button {
    padding: 0.5rem 0.625rem;
    border-radius: 1.5rem;
    background: transparent;
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.textPrimary};
    &:hover {
      opacity: 0.8;
    }
    img {
      width: 2rem;
    }
  }
  @media (max-width: 768px) {
    order: 2;
  }
`;


export const HeaderIcons = () =>
{
  const { toggleTheme = () => { } } = useTheme() || {};
  const toggleThemeIcon = useRef<HTMLImageElement | null>(null);

  function toggleThemeHandler()
  {
    if (toggleThemeIcon.current)
    {
      toggleThemeIcon.current.classList.toggle('rotated');
    }
    toggleTheme();
  }

  return (
    <HeaderIconsContainer>

      <Link to="/shoppingCart" aria-label="Go to Shopping Cart">
        <CartIcon width="32px" height="32px" />
      </Link>
      <button onClick={toggleThemeHandler}>
        <div ref={toggleThemeIcon}>
          <ChangeThemeIcon width="32px" height="32px" />
        </div>
      </button>

    </HeaderIconsContainer>
  )
};

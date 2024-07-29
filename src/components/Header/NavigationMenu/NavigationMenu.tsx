import React from 'react';
import styled from '@emotion/styled';

const NavMenu = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding-left: 0;
    gap: 1rem;
  }

  li {
    margin: 0 1.5rem;
  }

  a {
    color: black;
    font-size: 1rem;
    text-decoration: none;
    position: relative;
    padding-bottom: 0.5rem;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #8685EF;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
  @media (max-width: 768px) {
      order: 3;
      li{
        margin: 0 0.8rem;
      }
    }
`;


export const NavigationMenu = () =>
{
  return (
    <NavMenu>
      <ul >
        <li><a href="/" aria-label="Go to Main Page">Головна</a></li>
        <li><a href="/categories" aria-label="Go to Category Page">Категорії</a></li>
      </ul>
    </NavMenu>
  );
};

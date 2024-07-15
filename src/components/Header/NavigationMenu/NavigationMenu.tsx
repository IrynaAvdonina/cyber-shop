import React from 'react';
import styled from '@emotion/styled';

const NavMenu = styled.nav` 
  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin: 0 1.5rem;
  }

  a {
    color: black;
    padding: 0.875rem 1rem;
    font-size: 1rem;
    text-decoration: none;
    position: relative;
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
`;


export const NavigationMenu = () =>
{
  return (
    <NavMenu>
      <ul >
        <li><a href="/">Головна</a></li>
        <li><a href="/categories">Категорії</a></li>
      </ul>
    </NavMenu>
  );
};

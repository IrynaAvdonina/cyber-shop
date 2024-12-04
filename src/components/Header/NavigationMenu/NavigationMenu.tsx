import React from 'react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

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
    color: ${({ theme }) => theme.colors.textPrimary};
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
      background-color:  ${({ theme }) => theme.colors.accentPrimary};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
    
  }
  .active{
    color:  ${({ theme }) => theme.colors.accentPrimary};
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
        <li><NavLink to="/" aria-label="Go to Main Page">Головна</NavLink></li>
        <li><NavLink to="/categories" aria-label="Go to Category Page">Категорії</NavLink></li>
      </ul>
    </NavMenu>
  );
};

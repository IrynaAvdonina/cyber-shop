import React from 'react';
import './NavigationMenu.css';

export const NavigationMenu = () =>
{
  return (
    <nav className='nav-menu'>
      <ul >
        <li><a href="/">Головна</a></li>
        <li><a href="/categories">Категорії</a></li>
      </ul>
    </nav>
  );
};

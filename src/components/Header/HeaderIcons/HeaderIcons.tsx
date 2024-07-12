import React from 'react'
import cartIcon from './../../../assets/cart.png';
import accountIcon from './../../../assets/user.png';
import './HeaderIcons.css'

export const HeaderIcons = () => (
  <div className="header-icons">
    <a href="/shoppingCart">
      <img src={cartIcon} alt="Shopping Cart" />
    </a>
    <a href="/account">
      <img src={accountIcon} alt="My Account" />
    </a>
  </div>
);

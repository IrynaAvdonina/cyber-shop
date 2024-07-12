import React from 'react'
import bannerImage from '../../assets/banner-image.png';
import './MainBanner.css'

export const MainBanner = () => (
  <div className="main-banner">
    <div className="banner-content">
      <h1>IPhone 14 Pro</h1>
      <p>Створений, щоб змінити все на краще. Для кожного</p>
      <a href="/products/2" className="link-buy">Купити</a>
    </div>
    <img
      src={bannerImage}
      alt="banner"
      className="banner-image"
    />
  </div>
);

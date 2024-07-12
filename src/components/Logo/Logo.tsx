import React from 'react'
import logoImage from '../../assets/logo.svg';
import './Logo.css'

export const Logo = () => (

  <div className="logo-container">
    {<img src={logoImage} alt="logo" className="logo-image" />}
  </div>

)
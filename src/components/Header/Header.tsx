import React from 'react'
import { Logo } from '../Logo/Logo';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { SearchField } from './SearchField/SearchField';
import { HeaderIcons } from './HeaderIcons/HeaderIcons';
import './Header.css';

export const Header = () => (
  <div className="header">
    <Logo />
    <SearchField />
    <NavigationMenu />
    <HeaderIcons />
  </div>
)
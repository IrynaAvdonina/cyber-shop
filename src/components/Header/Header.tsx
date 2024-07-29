import React from 'react';
import styled from '@emotion/styled';

import { Logo } from '../Logo/Logo';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { SearchField } from './SearchField/SearchField';
import { HeaderIcons } from './HeaderIcons/HeaderIcons';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2.25rem 2rem;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`
export const Header = () => (
  <HeaderContainer>
    <Logo />
    <NavigationMenu />
    <SearchField />
    <HeaderIcons />
  </HeaderContainer>
)
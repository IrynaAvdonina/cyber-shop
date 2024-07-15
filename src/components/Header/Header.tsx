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
`

export const Header = () => (
  <HeaderContainer>
    <Logo />
    <SearchField />
    <NavigationMenu />
    <HeaderIcons />
  </HeaderContainer>
)
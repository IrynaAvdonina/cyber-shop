import React from 'react'
import styled from '@emotion/styled';

import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    order: 1;
  }
`;

const LogoImage = styled.img`
  width: 6.25rem;
  height: auto ;
`;

export const Logo = () => (
  <LogoContainer>
    <Link to="/">
      <LogoImage src={logoImage} alt="logo" />
    </Link>
  </LogoContainer>
);
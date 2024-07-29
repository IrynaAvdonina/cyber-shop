import React from 'react'
import styled from '@emotion/styled';

import logoImage from '../../assets/logo.svg';

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
    <a href="/">
      <LogoImage src={logoImage} alt="logo" />
    </a>
  </LogoContainer>
);
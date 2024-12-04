import React from 'react'
import styled from '@emotion/styled';

import LogoImage from '../../assets/logo.svg?react';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    order: 1;
  }
`;

const LogoImageContainer = styled(LogoImage)`
  width: 6.25rem;
  color:${({ theme }) => theme.colors.textPrimary};
  height: auto ;
`;

export const Logo = () => (
  <LogoContainer>
    <Link to="/">
      <LogoImageContainer />
    </Link>
  </LogoContainer>
);
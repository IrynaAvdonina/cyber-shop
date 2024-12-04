import React from 'react'
import { Logo } from '../Logo/Logo';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  gap: 0.8rem;
  p {
    order: 2;
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export const Footer = () => (
  <FooterContainer>
    <Logo />
    <p>Ми пропонуємо широкий вибір техніки та гаджетів для всіх ваші потреб. Приєднуйтесь до нашої спільноти та залишайтесь в тренді.</p>
  </FooterContainer>
)
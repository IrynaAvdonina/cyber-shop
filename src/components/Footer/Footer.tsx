import React from 'react'
import { Logo } from '../Logo/Logo';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  display: flex;
  padding: 2.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(200, 200, 200);
  gap: 1.25rem;
`;

export const Footer = () => (
  <FooterContainer>
    <Logo />
    <p>Ми пропонуємо широкий вибір техніки та гаджетів для всіх ваші потреб. Приєднуйтесь до нашої спільноти та залишайтесь в тренді.</p>
  </FooterContainer>
)
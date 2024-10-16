import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const MainDiv = styled.main`
flex-grow: 1;
`;
export const Root = () => (
  <>
    <Header />
    <MainDiv>
      <Outlet />
    </MainDiv>
    <Footer />
  </>
);
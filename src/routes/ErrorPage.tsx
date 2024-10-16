import styled from '@emotion/styled';
import React from 'react';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ErrorPage = () => (
  <ErrorPageContainer>
    <h1>404 Error</h1>
    <p>Page not found.</p>
  </ErrorPageContainer>
)
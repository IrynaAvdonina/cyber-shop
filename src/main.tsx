import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import { ThemeProvider } from "./context/ThemeContext";
import { AppRout } from "./routes/AppRout";
import { ThemeType } from './themes/themes';

const globalStyle = (theme: ThemeType) => css`

  body {
    font-family: Inter, system-ui, sans-serif;
    margin: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.textPrimary};
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.2em;
  }

  button {
    border-radius: 8px;
    font-family: Inter, system-ui, sans-serif;
    border: 2px solid transparent;
    font-size: 1em;
    background-color: ${theme.colors.buttonBackground};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.buttonHover};
    }
  }

  input{
    font-family: Inter, system-ui, sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Global
        styles={globalStyle} />
      <AppRout />
    </ThemeProvider>
  </React.StrictMode>
)

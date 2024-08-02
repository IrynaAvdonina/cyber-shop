import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRout } from './AppRout'
import { Global, css } from '@emotion/react';

const globalStyle = css`
  :root {
    font-family: Inter, system-ui, sans-serif;
    background-color: #ffffff;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 3.2em;
  }

  button {
    border-radius: 8px;
    font-family: Inter, system-ui, sans-serif;
    border: 2px solid transparent;
    font-size: 1em;
    background-color: #dbdbdb;
    cursor: pointer;
  }
  input{
    font-family: Inter, system-ui, sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={globalStyle} />
    <AppRout />
  </React.StrictMode>,
)
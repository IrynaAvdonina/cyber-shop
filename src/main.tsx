import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRout } from './AppRout'
import { Global, css } from '@emotion/react';
// 
// import './index.css'

const globalStyle = css`
  :root {
    font-family: Inter, system-ui, sans-serif;
    /* font-weight: 400; */
    color: #213547;
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
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global
      styles={globalStyle} />
    <AppRout />
  </React.StrictMode>,
)
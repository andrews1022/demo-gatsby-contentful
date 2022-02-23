import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #000;
    font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    color: #4a90e2;
  }

  a.active {
    font-weight: 700;
  }

  tt,
  code,
  kbd {
    background: rgba(0, 0, 0, 0.05);
    padding-bottom: 0.2em;
    padding-top: 0.2em;
  }

  tt,
  code,
  kbd {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    font-size: 90%;
  }

  tt,
  code {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    font-weight: 500;
    padding: 0.2em 0;
  }

  code:before,
  code:after,
  tt:before,
  tt:after {
    content: '';
    letter-spacing: -0.2em;
  }

  pre,
  code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

`;

export default GlobalStyle;

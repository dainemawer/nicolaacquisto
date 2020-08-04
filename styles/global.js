import {normalize} from 'styled-normalize';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background-color: #E1DCD5;
    box-sizing: border-box;
    transition: background-color 250ms ease-in-out;
  }
  
  body.page-about {
    background-color: #383838;
  }
  
  body.page-about * {
    color: #ffffff;
  }
  
  body.page-about svg path {
    fill: #ffffff;
  }
  
  html,
  body,
  #__next {
    height: 100%;
  }
  
  .sr-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }
`;
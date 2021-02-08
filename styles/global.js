import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  body {
    background-color: #F3F1F1;
    box-sizing: border-box;
    transition: background-color 250ms ease-in-out;
  }
  
  body.page-home {
    background-color: #E1DCD5;
  }
  
  body.splash-bg {
    background-color: #383838;
  }
  
  body.page-about {
    background-color: #383838;
    
    main {
      height: auto;
      
      @media (min-width: 1240px) {
        height: calc(100% - 172px);
      }
    }
  }
  
  body.page-about * {
    color: #ffffff;
  }
  
  body.page-about svg path {
    fill: #ffffff;
  }
  
  body.page-project {
    main {
        height: auto;
    }
  }
  
  body.page-projects {
    height: auto;
  
    header[role="banner"] {
    
      @media(min-width: 768px) {
        position: sticky;
        top: 0;
        z-index: 99;
      }
    }
    
    main {
        height: auto;
    }
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
  
  ul {
    font-family: 'Inter', sans-serif;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  img {
    height: auto;
    max-width: 100%;
  }
  
  #nprogress .bar {
    background: #E95D62 !important;
  }
  
  #nprogress .spinner-icon {
    border-top-color: #E95D62;
    border-left-color: #E95D62;
  }
  
  .home {
    justify-content: center;
  }

  .work-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -64px; /* gutter size offset */
    width: auto;
    justify-content: space-between;
    width: calc(100% + 64px);
  }

  .work-masonry-grid_column {
    padding-left: 64px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .work-masonry-grid_column:last-of-type > div { 
    display: flex;
    justify-content: flex-end;
  }
`

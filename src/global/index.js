import { createGlobalStyle } from "styled-components";

import ComicScript from "../assets/comic-script.ttf";

const GlobalStyle = createGlobalStyle`

   @font-face {
    font-family: "Comic Script";
    src: url(${ComicScript});
    font-weight: normal!important;
    font-style: normal!important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Comic Neue", "Poppins", sans-serif;
  }

  button, textarea, select, option, input {
    font-family: "Comic Neue", "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Comic Script", "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
  }
`;

export default GlobalStyle;

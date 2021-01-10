import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Poppins", sans-serif;
  }

  button, textarea, select, option, input {
    font-family: "Poppins", sans-serif;
  }
  button {
    cursor: pointer;
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

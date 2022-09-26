import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
  body {
    margin: 0;
    padding: 0px;
    background-image: linear-gradient(to right bottom, #415380, #40799e, #539eb3, #7ac2c2, #aee5d1);
    background-repeat: no-repeat;
    font-family: 'Arial';
font-style: normal;
font-size: 100%
    }
    ul,ol{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  p{
    margin: 0;
  }
`;

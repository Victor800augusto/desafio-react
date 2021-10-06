import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    header{
        background: linear-gradient(
    133.94deg,
    #8256d5 1.41%,
    #3a31c8 23.29%,
    #150855 76.15%,
    #140853 101.52%
  );
    }
    body{
        font-family:Tahoma, Arial, sans-serif;
        background: #f2f2f2;
    }
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 1.5rem;
    }
    h3{
        font-size: 1.125rem;
    }
    h4{
        font-size: 0.875rem;
        font-weight:400;
    }

    a {
    text-decoration: none;
  }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
`;

export default GlobalStyles;

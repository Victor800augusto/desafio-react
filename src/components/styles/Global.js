import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    body{
        font-family:Tahoma, Arial, sans-serif;
        background: #f2f2f2;
    }
    h1{
        font-size: 1.5rem;
    }
    h2{
        font-size: 1.25rem;
    }
    h3{
        font-size: 1.125rem;
    }
    h4{
        font-size: 0.875rem;
        font-weight:400;
    }
`;

export default GlobalStyles;

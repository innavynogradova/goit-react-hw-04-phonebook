import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Roboto, sans-serif;
        text-align: center;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
        list-style: none;
    }
`;
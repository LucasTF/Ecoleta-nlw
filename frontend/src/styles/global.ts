import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #34CB79;
        --title-color: #322153;
        --text-color: #6C6C80;
        font-family: Dosis, Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 1.5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5;
        -webkit-font-smoothing: antialiased;
        color: var(--text-color);
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--title-color);
        font-family: Ubuntu;
    }

`;

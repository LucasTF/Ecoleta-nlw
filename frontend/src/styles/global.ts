import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
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
        background: ${props => props.theme.colors.backgroundColor};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.colors.textColor};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.titleColor};
        font-family: Ubuntu;
    }

`;

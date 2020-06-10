import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import colors from './colors';
import { normalize } from 'polished';

const { theme } = colors;

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        font-family: ${primaryFont};
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text };
    }

    main {
        width: 90%;
        margin: 0 auto;
    }

    footer {
        display: flex;
        flex-direction: column;
        padding: 10px 15px;
        margin: 10px 15px;
        bottom: 0;
    }

    a {
        text-decoration: none;
        color: ${theme[100]};
        letter-spacing: 0.5;
    }
    a:hover {
        color: ${theme[200]};
    }
`

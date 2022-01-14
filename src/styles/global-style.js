import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body{
        font-size: 1.6rem;
        font-family: 'arial'
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat', sans-serif;
    }
    a{
        text-decoration: none;
        color: '#5624d0'
        transition: all .5s ease-in-out;
    }
    a:hover{
        color:
    }
    button{
        ${({ theme }) => css`
          background-color: ${theme.colors.mainBg};
          color: white;
        `}
    }

    img{
      border-radius: 15px;

    }

`;

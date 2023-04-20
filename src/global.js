import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  .bgButton {
    background: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.buttonText}
  }

  .bgButtonSecondary {
    background: ${({ theme }) => theme.bgButtonSecondary};
    color: ${({ theme }) => theme.text}
  }

  .nav-link {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    color: ${({ theme }) => theme.text};
  }

  .navbar-toggler-icon {
    color: ${({ theme }) => theme.text};
  }

  .bgSecondary {
    background: ${({ theme }) => theme.bgSecondary};
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  td {
    color: ${({ theme }) => theme.text};
  }

  p {
    margin: 0;
  }
  `;

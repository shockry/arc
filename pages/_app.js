import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { ColorModeProvider } from "../contexts/colorModeContext";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #d6d5b2;
    --text-color: initial;
    color-scheme: light;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #222831;
      --text-color: #ececec;
      color-scheme: dark;
    }
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;

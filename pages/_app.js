import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { ColorModeProvider } from "../contexts/colorModeContext";
import { COLORS } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    --bg-color: ${COLORS.bgLight};
    --text-color: initial;
    color-scheme: light;

    background-color: var(--bg-color);
    transition: background-color 0.3s linear;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body.dark {
    --bg-color: ${COLORS.bgDark};
    --text-color: ${COLORS.textDark};
    color-scheme: light;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <GlobalStyle />
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </>
  );
}

export default MyApp;

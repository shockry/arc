import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { ColorModeProvider } from "../contexts/colorModeContext";
import { COLORS } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    --bg-color: ${COLORS.light.background};
    --text-color: initial;
    --dark-mode-button-bg: ${COLORS.light.darkModeButtonBg};
    --hr-gradient-edge: ${COLORS.light.hrGradientEdge};
    --hr-gradient-middle: ${COLORS.light.hrGradientMiddle};
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
    --bg-color: ${COLORS.dark.background};
    --text-color: ${COLORS.dark.text};
    --dark-mode-button-bg: ${COLORS.dark.darkModeButtonBg};
    --hr-gradient-edge: ${COLORS.dark.hrGradientEdge};
    --hr-gradient-middle: ${COLORS.dark.hrGradientMiddle};
    color-scheme: dark;
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

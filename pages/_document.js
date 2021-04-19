import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

function setInitialColorVariables() {
  function getColorMode() {
    if (window.localStorage.getItem("prefers-dark")) {
      return window.localStorage.getItem("prefers-dark") === "true"
        ? "dark"
        : "light";
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  const colorMode = getColorMode();

  if (colorMode === "dark") {
    document.documentElement.style.setProperty("--bg-color", "#222831");
    document.documentElement.style.setProperty("--text-color", "#ececec");
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#d6d5b2");
    document.documentElement.style.setProperty("--text-color", "initial");
    document.documentElement.style.setProperty("color-scheme", "light");
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(${setInitialColorVariables.toString()})()`,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

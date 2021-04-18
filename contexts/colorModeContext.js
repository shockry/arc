import { createContext, useContext, useEffect, useState } from "react";

const ColorModeContext = createContext();

function getInitialColorMode() {
  if (typeof window === "undefined") {
    return null;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function ColorModeProvider(props) {
  const { children } = props;
  const [colorMode, setColorMode] = useState(getInitialColorMode);

  useEffect(() => {
    if (colorMode === null) {
      return;
    }
    if (colorMode === "dark") {
      document.documentElement.style.setProperty("--bg-color", "#222831");
      document.documentElement.style.setProperty("--text-color", "#ececec");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#d6d5b2");
      document.documentElement.style.setProperty("--text-color", "initial");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

function useColorMode() {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("Must be inside colorModeContext provider");
  }

  const { colorMode, setColorMode } = context;

  return { colorMode, setColorMode };
}

export { ColorModeProvider, useColorMode };

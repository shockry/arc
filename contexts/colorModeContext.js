import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const ColorModeContext = createContext();

function getInitialColorMode() {
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

function setCSSVariables(colorMode) {
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

function ColorModeProvider(props) {
  const { children } = props;
  const [colorMode, setColorMode] = useState(null);

  useEffect(() => {
    setColorMode(getInitialColorMode());
  }, []);

  useEffect(() => {
    if (!colorMode) {
      return;
    }

    setCSSVariables(colorMode);
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

  const setColorModePersisted = useCallback((colorMode) => {
    setColorMode(colorMode);
    window.localStorage.setItem("prefers-dark", colorMode === "dark");
  }, []);

  return { colorMode, setColorMode: setColorModePersisted };
}

export {
  ColorModeProvider,
  useColorMode,
  getInitialColorMode,
  setCSSVariables,
};

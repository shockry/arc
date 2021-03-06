import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { COLOR_MODES } from "../constants";

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

function activateColorMode(colorMode) {
  if (colorMode === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
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

    activateColorMode(colorMode);
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

  const setColorModePersisted = useCallback((newColorMode) => {
    setColorMode(newColorMode);
    window.localStorage.setItem(
      "prefers-dark",
      newColorMode === COLOR_MODES.dark
    );
  }, []);

  return { colorMode, setColorMode: setColorModePersisted };
}

export {
  ColorModeProvider,
  useColorMode,
  getInitialColorMode,
  activateColorMode,
};

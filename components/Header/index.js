import { useColorMode } from "../../contexts/colorModeContext";
import { ColorModeButton, Container } from "./styles";

function Header(props) {
  const { children } = props;
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Container>
      <div>{children}</div>
      {colorMode && (
        <ColorModeButton
          colorMode={colorMode}
          onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
        >
          {colorMode === "dark" ? "☀️" : "🌙"}
        </ColorModeButton>
      )}
    </Container>
  );
}

export default Header;

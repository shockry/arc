import { useColorMode } from "../../contexts/colorModeContext";
import { Container } from "./styles";

function Header(props) {
  const { children } = props;
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Container>
      <div>{children}</div>
      <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      >
        Toggle lights
      </button>
    </Container>
  );
}

export default Header;

import { Container } from "./styles";

function Header(props) {
  const { children } = props;

  return (
    <Container>
      <div>{children}</div>
      <button>Toggle lights</button>
    </Container>
  );
}

export default Header;

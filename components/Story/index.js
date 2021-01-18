import Link from "next/link";
import { BackButton, Body, StoryContainer, Title } from "./styles";

function Story(props) {
  const { title, body } = props.post;
  return (
    <div>
      <Link href="/" passHref>
        <BackButton>&#5130;</BackButton>
      </Link>
      <StoryContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <Body>{body}</Body>
      </StoryContainer>
    </div>
  );
}

export default Story;

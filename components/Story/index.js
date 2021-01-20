import Link from "next/link";
import { BackButton, Body, StoryContainer, Title } from "./styles";

function Story(props) {
  const { title, content } = props.story;

  return (
    <div>
      <Link href="/" passHref>
        <BackButton>&#5130;</BackButton>
      </Link>
      <StoryContainer>
        <Title>{title}</Title>
        <Body>{content}</Body>
      </StoryContainer>
    </div>
  );
}

export default Story;

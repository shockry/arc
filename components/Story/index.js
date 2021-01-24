import Link from "next/link";
import { BackButton, Body, StoryContainer, TheEnd, Title } from "./styles";
import Image from "next/image";

function Story(props) {
  const { title, content } = props.story;

  return (
    <div>
      <Link href="/" passHref>
        <BackButton>&#5130;</BackButton>
      </Link>
      <StoryContainer>
        <Title>{title}</Title>
        <Body>
          {content}
          <TheEnd>
            <Image src="/arc-logo.svg" alt="logo" width={64} height={64} />{" "}
            <span>The End</span>
          </TheEnd>
        </Body>
      </StoryContainer>
    </div>
  );
}

export default Story;

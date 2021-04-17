import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Header";
import { BackButton, Body, StoryContainer, TheEnd, Title } from "./styles";

function Story(props) {
  const { title, content } = props.story;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>
        <Link href="/" passHref>
          <BackButton>&#5130;</BackButton>
        </Link>
      </Header>
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

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "../Header";
import { useColorMode } from "../../contexts/colorModeContext";
import { COLOR_MODES } from "../../constants";
import { BackButton, Body, StoryContainer, TheEnd, Title } from "./styles";

function Story(props) {
  const { title, content } = props.story;
  const { colorMode } = useColorMode();

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
        <Body isDarkMode={colorMode === COLOR_MODES.dark}>
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

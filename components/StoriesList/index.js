import Link from "next/link";
import Head from "next/head";
import Header from "../Header";
import { Story, StoryGrid, Title } from "./styles";

function StoriesList(props) {
  const { stories } = props;

  return (
    <div>
      <Head>
        <title>Library</title>
      </Head>
      <Header>
        <Title>Library</Title>
      </Header>
      <StoryGrid>
        {stories.map((story) => (
          <Link href={`/stories/${story.slug}`} key={story.slug}>
            <a>
              <Story>
                <span title={story.title}>{story.title}</span>
              </Story>
            </a>
          </Link>
        ))}
      </StoryGrid>
    </div>
  );
}
export default StoriesList;

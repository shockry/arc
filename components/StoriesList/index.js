import Link from "next/link";
import { Story, StoryGrid } from "./styles";

function StoriesList(props) {
  const { stories } = props;

  return (
    <StoryGrid>
      {stories.map((story) => (
        <Link href={`/story/${story.slug}`} key={story.slug}>
          <a>
            <Story>
              <span title={story.title}>{story.title}</span>
            </Story>
          </a>
        </Link>
      ))}
    </StoryGrid>
  );
}

export default StoriesList;

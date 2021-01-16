import { Story, StoryGrid } from "./styles";

function StoriesList(props) {
  const { stories } = props;

  return (
    <StoryGrid>
      {stories.map((story) => (
        <Story key={story.slug}>{story.title}</Story>
      ))}
    </StoryGrid>
  );
}

export default StoriesList;

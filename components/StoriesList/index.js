import { Story, StoryGrid } from "./styles";

function StoriesList(props) {
  const { stories } = props;

  return (
    <StoryGrid>
      {stories.map((story) => (
        <Story key={story.slug}>
          <span title={story.title}>{story.title}</span>
        </Story>
      ))}
    </StoryGrid>
  );
}

export default StoriesList;

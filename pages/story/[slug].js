import remark from "remark";
import remark2react from "remark-react";
import Story from "../../components/Story";
import { getAllStories, getStoryBySlug } from "../../utils";

function StoryPage(props) {
  const { story } = props;
  const content = remark().use(remark2react).processSync(story.content).result;

  return <Story story={{ ...story, content }} />;
}

export async function getStaticProps(context) {
  return {
    props: {
      story: getStoryBySlug(context.params.slug, ["title", "content"]),
    },
  };
}

export async function getStaticPaths() {
  const slugs = getAllStories(["slug"]);

  return {
    paths: slugs.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}

export default StoryPage;

import fs from "fs";
import { join } from "path";
import remark from "remark";
import remark2react from "remark-react";
import Story from "../../components/Story";

function StoryPage(props) {
  const { post } = props;
  const body = remark().use(remark2react).processSync(post.body).result;

  return <Story post={{ ...post, body }} />;
}

const stories = [
  {
    title: "First one",
    slug: "first-one",
  },
  {
    title: "Another one",
    slug: "another-one",
  },
  {
    title: "We the best music",
    slug: "we-the-best-music",
  },
  {
    title: "All my friends are heathens",
    slug: "all-my-friends-are-heathens",
  },
  {
    title: "Take it slow",
    slug: "take-it-slow",
  },
  {
    title: "Boom Shaka Laka",
    slug: "boom-shaka-laka",
  },
];

export async function getStaticProps(context) {
  const storiesPath = join(process.cwd(), "stories");
  const body = fs.readFileSync(
    join(storiesPath, `${context.params.slug}.md`),
    "utf8"
  );
  return {
    props: {
      post: {
        slug: context.params.slug,
        title: context.params.slug.replace(/-/g, " "),
        body,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: stories.map((story) => {
      return {
        params: {
          slug: story.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default StoryPage;

import Story from "../../components/Story";

function StoryPage(props) {
  const { post } = props;

  return <Story post={post} />;
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
    body: `Anim reprehenderit voluptate reprehenderit et in aute eu ad ut id. Minim proident excepteur mollit minim cupidatat velit. Aute laborum reprehenderit occaecat voluptate voluptate aute excepteur occaecat amet esse aute.
    Ullamco reprehenderit reprehenderit sit commodo exercitation sunt consequat. Reprehenderit aliqua nostrud labore id dolor consequat aute. Irure dolore fugiat magna fugiat incididunt dolor eiusmod voluptate commodo pariatur irure qui. Sunt officia est incididunt laborum pariatur ad aliquip. Consequat aute ea deserunt enim deserunt minim.
    Consequat amet ipsum proident laborum. Sint tempor ullamco esse sit magna eiusmod occaecat anim commodo. Mollit irure occaecat enim est adipisicing proident ullamco culpa aliquip. Dolor sunt cupidatat veniam do nulla pariatur duis consequat aute est voluptate eiusmod. Adipisicing consequat non sint excepteur ea officia Lorem.
    Reprehenderit aliqua aute laborum consectetur. Eiusmod excepteur in pariatur anim nisi veniam. Ullamco officia labore culpa sint ipsum consequat tempor eiusmod magna non ipsum nisi sit.
    Quis tempor commodo enim ea nisi aute minim mollit elit amet. Enim pariatur voluptate dolore veniam deserunt minim exercitation irure ex qui exercitation in ullamco. Velit elit est labore commodo tempor commodo.`,
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
  return {
    props: {
      post: {
        slug: context.params.slug,
        title: context.params.slug.replace(/-/g, " "),
        body:
          stories.find((story) => story.slug === context.params.slug).body ||
          "There once was uh a boy, and uh a cat",
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

function Story(props) {
  const { title } = props.post;
  return title;
}

export async function getStaticProps(context) {
  return {
    props: {
      post: {
        slug: context.params.slug,
        title: context.params.slug.replace(/-/g, " "),
      },
    },
  };
}

export async function getStaticPaths() {
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

export default Story;

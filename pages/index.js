import StoriesList from "../components/StoriesList";

function Home(props) {
  const { stories } = props;

  return <StoriesList stories={stories} />;
}

export async function getStaticProps(context) {
  return {
    props: {
      stories: [
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
      ],
    },
  };
}
export default Home;

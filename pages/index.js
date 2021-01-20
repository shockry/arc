import StoriesList from "../components/StoriesList";
import { getAllStories } from "../utils";

function Home(props) {
  const { stories } = props;

  return <StoriesList stories={stories} />;
}

export async function getStaticProps() {
  const stories = getAllStories(["title", "date", "slug"]);

  return {
    props: { stories },
  };
}
export default Home;

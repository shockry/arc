import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const storiesDirectory = join(process.cwd(), "stories");

function getStoryFileNames() {
  return fs.readdirSync(storiesDirectory);
}

function getStoryBySlug(slug, fields = []) {
  return getStoryByFileName(`${slug}.md`, fields);
}

function getStoryByFileName(fileName, fields = []) {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = join(storiesDirectory, `${fileName}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const fullStory = {
    slug,
    content,
    ...data,
  };

  const story = fields.reduce(
    (storySoFar, field) =>
      Object.assign(storySoFar, { [field]: fullStory[field] }),
    {}
  );

  return story;
}

function getAllStories(fields = []) {
  const fileNames = getStoryFileNames().filter((fileName) =>
    /.+\.md$/.test(fileName)
  );

  const stories = fileNames
    .map((fileName) => getStoryByFileName(fileName, fields))
    .sort((story1, story2) => (story1.date > story2.date ? -1 : 1));

  return stories;
}

export { getAllStories, getStoryBySlug };

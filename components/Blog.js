import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const Blog = ({ blok }) => {
  // console.log(blok);
  return (
    <>
      <ArticleHeader blok={blok} />
      <ArticleBody blok={blok} />
    </>
  );
};
export default Blog;

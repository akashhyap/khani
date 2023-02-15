import BlogTeaser from "./BlogTeaser";
import BlogTeaserLayout from "./BlogTeaserLayout";
import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";

const Breed = ({ blok }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "breed/",
      });
      setBlog(data.stories);
      // console.log("data ==>", data);
    };
    getArticles();
  }, []);
  return (
    <>
      {blok?.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <BlogTeaserLayout>
        {blog[0] &&
          blog.map((article) => {
            // console.log("breed", article);
            return (
              <BlogTeaser
                article={article.content}
                slug={article.full_slug}
                key={article.uuid}
              />
            );
          })}
      </BlogTeaserLayout>
    </>
  );
};
export default Breed;

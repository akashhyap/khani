import BlogTeaser from "./BlogTeaser";
import BlogTeaserLayout from "./BlogTeaserLayout";

import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";

const Alimentazione = ({ blok }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getAlimentazione = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "alimentazione/",
      });
      setBlog(data.stories);
      // console.log("data ==>", data);
    };
    getAlimentazione();
  }, []);
  return (
    <>
      {blok?.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <BlogTeaserLayout blok={blok}>
        {blog[0] &&
          blog.map((article) => {
            // console.log("all", article);
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
export default Alimentazione;

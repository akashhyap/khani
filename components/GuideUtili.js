import BlogTeaser from "./BlogTeaser";
import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";

const GuideUtili = ({ blok }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "guide-utili/",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 mx-auto max-w-7xl px-5">
        {blog[0] &&
          blog.map((article) => {
            // console.log("article", article);
            return (
              <BlogTeaser
                article={article.content}
                slug={article.full_slug}
                key={article.uuid}
              />
            );
          })}
      </div>
    </>
  );
};
export default GuideUtili;

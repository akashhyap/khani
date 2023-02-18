import BlogTeaser from "./BlogTeaser";
import BlogTeaserLayout from "./BlogTeaserLayout";
import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import { useState, useEffect } from "react";
import BreadcrumbBlog from "./BreadcrumbBlog";

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
      {blok?.content.map((nestedBlok) => {
        const isHero = nestedBlok?.component == "heroAllBlog";

        if (isHero) {
          return (
            <header key={nestedBlok._uid}>
              <StoryblokComponent blok={nestedBlok} />
              <BreadcrumbBlog blok={nestedBlok} />
            </header>
          );
        }
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </>
  );
};
export default Breed;

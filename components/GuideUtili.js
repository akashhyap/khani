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
// import HorizontalCardItem from "./HorizontalCardItem";


const GuideUtili = ({ blok }) => {
  // console.log("Guide Utili:", blok);

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
      <div className="mx-auto max-w-7xl px-3 md:px-12 grid lg:grid-cols-3 gap-6 mb-10">
        {blog[0] &&
          blog.map((story) => {
            // console.log("story", story.content.component);

            if (
              story.content.component !== "page" &&
              story.tag_list.length === 0
            ) {
              return (
                <BlogTeaser
                  key={story.uuid}
                  article={story.content}
                  slug={story.full_slug}
                  category={blok.category}
                />
              );
            }
          })}
      </div>
    </>
  );
};
export default GuideUtili;

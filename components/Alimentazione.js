import BreadcrumbBlog from "./BreadcrumbBlog";

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
      {blok?.content.map((nestedBlok) => {
        
        const isHero = nestedBlok?.component == "heroAllBlog";

        if(isHero) {
          return (
            <header key={nestedBlok._uid}>
              <StoryblokComponent blok={nestedBlok} />
              <BreadcrumbBlog blok = {nestedBlok}/>
            </header>
          );
        }
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </>
  );
};
export default Alimentazione;

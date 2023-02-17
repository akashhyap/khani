import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const FluidLayout = ({ blok }) => {
  // console.log("fluid", blok);
  const containerFluid = blok.containerFluid === true;

  return (
    <div className={`${containerFluid ? "md:w-full" : ""} md:w-7/12 m-auto`}>
      {blok.content.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    </div>
  );
};
export default FluidLayout;

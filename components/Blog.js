import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Blog = ({ blok }) => {
  // console.log("blog", blok);
  return (
    <main {...storyblokEditable(blok)} className="w-full md:w-7/12 m-auto text-md md:text-lg mt-10">
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default Blog;

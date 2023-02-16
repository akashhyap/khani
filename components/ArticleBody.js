import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ArticleBody = ({ blok }) => {
  // console.log("ArticleBody");
  return (
    <main className="w-full md:w-7/12 m-auto text-md md:text-lg mt-10 mb-8 px-7 [&>h2]:text-2xl sm:[&>h2]:text-4xl lg:[&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:py-4 [&>p>img]:rounded-2xl [&>p]:text-lg [&>p]:py-4 [&>p]:leading-8">
      {blok.body.map((nestedBlok) => {
        const isTitle = nestedBlok.component == "title";
        const isBlogAuthorInfo = nestedBlok.component == "blogAuthorInfo";
        const isFeaturedImage = nestedBlok.component == "featuredImage";
        const content =
          !isTitle && !isBlogAuthorInfo && !isFeaturedImage ? (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ) : null;
        return content;
      })}
    </main>
  );
};
export default ArticleBody;

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const ArticleHeader = ({ blok }) => {
  return (
    <>
      <div className="relative pt-5 pb-12 md:py-16 bg-gradient-to-r from-green-700 to-green-900">
        <div className="w-full md:w-7/12 m-auto text-md md:text-lg px-7">
          {blok.body.map((nestedBlok) => {
            const isTitle = nestedBlok.component == "title";
            const isBlogAuthorInfo = nestedBlok.component == "blogAuthorInfo";
            const isFeaturedImage = nestedBlok.component == "featuredImage";
            const header =
              isTitle || isBlogAuthorInfo || isFeaturedImage ? (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ) : null;
            return header;
          })}
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute bottom-0 left-0 right-0 z-10 shape">
          <svg
            width="3000"
            height="600"
            viewBox="0 0 3000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path d="M0 600H3000V0L0 600Z" fill="#fff"></path>
          </svg>
        </div>
      </div>
    </>
  );
};
export default ArticleHeader;

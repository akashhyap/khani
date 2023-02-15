import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react";

// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogTeaser = ({ article, slug }) => {
  // console.log("article", article.body.component);
  const isPageComponent = article.component == "page";

  let date = !isPageComponent && new Date(article.date.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser group hover:bg-gray-100 p-5 rounded-xl transition duration-500 ease-in-out">
          <figure className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <Link href={`/${slug}`} legacyBehavior>
              <a>
                <img
                  className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                  src={article?.image.filename}
                  alt="blog"
                />
              </a>
            </Link>
          </figure>

          <h2 className="font-poppins mb-5 mt-6 text-2xl font-semibold leading-8 tracking-tighter">
            <Link href={`/${slug}`} legacyBehavior>
              <a>{article.title}</a>
            </Link>
          </h2>
          <div className="text-base leading-7 mb-8">
            <p className="pb-0">{article.metatags.description}</p>
          </div>
          <div className="text-base">
            {article.body.map((nestedBlok) => {
              const isBlogAuthorInfo = nestedBlok.component == "blogAuthorInfo";
              let img = isBlogAuthorInfo && nestedBlok.image.filename;
              return (
                <div key={nestedBlok._uid}>
                  {nestedBlok.component == "blogAuthorInfo" && (
                    <StoryblokComponent blok={nestedBlok} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default BlogTeaser;

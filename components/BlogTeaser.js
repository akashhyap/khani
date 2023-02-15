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
        <div className="blog_teaser shadow-lg shadow-zinc-300 rounded-xl">
          <figure className="mb-2 lg:h-60 md:h-48">
            <Link href={`/${slug}`} legacyBehavior>
              <a>
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src={article?.image.filename}
                  alt="blog"
                />
              </a>
            </Link>
          </figure>
          <div className="px-5">
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
                const isBlogAuthorInfo =
                  nestedBlok.component == "blogAuthorInfo";
                let img = isBlogAuthorInfo && nestedBlok.image.filename;
                return (
                  <div key={nestedBlok._uid}>
                    {nestedBlok.component == "blogAuthorInfo" && (
                      <StoryblokComponent
                        blok={nestedBlok}
                        
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default BlogTeaser;

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
  // console.log("blog teaser", article);

  const isPageComponent = article?.component == "page";
  let date = !isPageComponent && new Date(article?.date?.split(" ")[0]);

  return (
    <>
      {!isPageComponent && (
        <div className="blog_teaser flex flex-col group hover:bg-gray-100 p-5 rounded-xl transition duration-500 ease-in-out">
          {article?.body.map((item) => {
            switch (item.component) {
              case "featuredImage":
                return (
                  <figure
                    key={item._uid}
                    className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden order-1"
                  >
                    <Link href={`/${slug}`} legacyBehavior>
                      <a>
                        <img
                          className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                          src={`${item.image?.filename}/m/`}
                          alt="blog"
                        />
                      </a>
                    </Link>
                  </figure>
                );
                break;

              case "title":
                return (
                  <h2
                    key={item._uid}
                    className="exclude-index font-poppins mb-0 mt-6 text-2xl text-eerie font-semibold leading-8 tracking-tighter order-2"
                  >
                    <Link href={`/${slug}`} legacyBehavior>
                      <a>{item.title}</a>
                    </Link>
                  </h2>
                );
                break;

              case "blogAuthorInfo":
                return (
                  <div key={item._uid} className="text-base order-3">
                    <StoryblokComponent blok={item} />
                  </div>
                );
                break;
              default:
                break;
            }
          })}
        </div>
      )}
    </>
  );
};
export default BlogTeaser;

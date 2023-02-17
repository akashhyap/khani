import Link from "next/link";

const BlogTeaserLayout = ({ children, blok }) => {
  // console.log("blog teaser", blok.content[0].title);
  return (
    <>
      <div className="mx-auto max-w-7xl px-12 pt-8">
        <ol
          className="flex items-center whitespace-nowrap min-w-0"
          aria-label="Breadcrumb"
        >
          <li className="text-sm group">
            <Link href="/" legacyBehavior>
              <a className="flex items-center underline underline-offset-4 text-gray-900 group-hover:text-saffron">
                <svg
                  className="flex-shrink-0 mr-3 h-4 w-4 text-gray-900 group-hover:text-saffron"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Home
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-900"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li
            className="text-sm text-gray-900 truncate"
            aria-current="page"
          >
            {blok.content[0].title}
          </li>
        </ol>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10 mx-auto max-w-7xl px-7 mb-16">
        {children}
      </div>
    </>
  );
};

export default BlogTeaserLayout;

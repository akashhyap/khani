import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Navigation = ({ blok }) => {
  // console.log('nav',blok);

  const targetNav = useRef(null);
  const targetBtn = useRef(null);

  useEffect(() => {
    const linkItem = targetNav.current.querySelectorAll("a");
    linkItem.forEach((li) => {
      if (typeof window !== "undefined") {
        if (window.screen.width < 767) {
          li.addEventListener("click", () => {
            targetBtn.current.click();
          });
        }
      }
    });
  }, []);

  return (
    <div
      className="relative bg-white border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4 px-5">
        <nav
          className="relative max-w-7xl w-full md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link href="/" legacyBehavior>
              <a>
                <img
                  src={blok?.logo.filename}
                  alt="Khani"
                  className="h-full object-cover basis-24 w-2/5"
                />
              </a>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                ref={targetBtn}
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 font-medium bg-white align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all text-lg"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-6 h-6"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-6 h-6"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div
              ref={targetNav}
              className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7"
            >
              {blok?.header_menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navigation;

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = ({ blok }) => {
  console.log("footer", blok);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-10/12 mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <Link href="/" legacyBehavior>
            <a>
              <img src={blok?.logo.filename} alt="Khani" className="h-20" />
            </a>
          </Link>
        </div>

        {blok?.footer.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      <div className="bg-gradient-to-r from-green-700 to-green-900">
        <div className="md:w-10/12 m-auto text-white copyright py-2 px-7">
          {render(blok?.copyright)}
        </div>
      </div>
    </>
  );
};

export default Footer;

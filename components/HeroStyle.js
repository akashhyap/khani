import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const HeroStyle = ({ blok }) => {
  // console.log("hero style", blok);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[75%] rounded-lg">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              alt=""
              src={`${blok.image.filename}/m/`}
            />
          </div>
        </div>

        <div className="sm:order-1 [&>h2]:text-2xl sm:[&>h2]:text-4xl lg:[&>h2]:text-4xl [&>h2]:font-semibold [&>p]:text-lg [&>p]:py-4 [&>p]:leading-8">
          {render(blok.content)}
        </div>
      </div>
    </div>
  );
};

export default HeroStyle;

import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const HeroAllBlog = ({ blok }) => {
  // console.log("hero ==>", blok);

  return (
    <section className="relative w-full">
      <div className="h-full w-full absolute top-0 left-0 right-0">
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `url(${blok.image.filename}/m/)`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative w-full">
        <h1 className="text-white text-center md:text-6xl py-10 md:py-36 font-semibold">
          {blok.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroAllBlog;

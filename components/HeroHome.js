import { storyblokEditable } from "@storyblok/react";
// import { render } from "storyblok-rich-text-react-renderer";

const HeroHome = ({ blok }) => {
  // console.log("hero ==>", blok);

  let htmlContent = "";
  blok.caption.content.forEach((obj) => {
    if (obj.type === "code_block") {
      htmlContent += obj.content[0].text;
    }
  });

  return (
    <section {...storyblokEditable(blok)} className="relative heroSection">
      <div>
        <div className="h-full w-full absolute top-0">
          <div
            className="absolute h-full w-full"
            style={{
              backgroundImage: `url(${blok.backgroundimage.filename}/m/)`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl pt-16">
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <img
          src={`${blok.insetimage.filename}/m/`}
          alt="inset image"
          className="pointer-events-none select-none"
        />
      </div>
    </section>
  );
};

export default HeroHome;

import { render } from "storyblok-rich-text-react-renderer";

const FeaturedImage = ({ blok }) => {
    // console.log("img ==>", blok);
  return (
    <figure className="w-full z-20 relative">
      {blok.image.filename && (
        <img
          className="w-full object-cover object-center rounded-2xl"
          alt={blok.image.alt}
          src={`${blok.image.filename}/m/`}
        />
      )}
    </figure>
  );
};
export default FeaturedImage;

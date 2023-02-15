import { render } from "storyblok-rich-text-react-renderer";

const FeaturedImage = ({ blok }) => {
    // console.log("img ==>", blok);
  return (
    <figure className="w-full">
      {blok.image.filename && (
        <img
          className="w-full mb-10 object-cover object-center rounded-2xl"
          alt={blok.image.alt}
          src={`${blok.image.filename}/m/`}
        />
      )}
    </figure>
  );
};
export default FeaturedImage;

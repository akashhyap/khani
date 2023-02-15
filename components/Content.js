import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  //   console.log("all blog ==>", blok);
  return (
    <div className="w-full">
      <div className="mb-8 [&>p]:text-xl [&>p]:pb-5 [&>p]:leading-10">{render(blok.content)}</div>
    </div>
  );
};
export default Content;

import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  //   console.log("all blog ==>", blok);
  return (
    <>
      {render(blok.content)}
    </>
  );
};
export default Content;

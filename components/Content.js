import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  // console.log("container ==>", blok);

  return (
    <main className="text-md md:text-lg pt-4 pb-10 px-7 [&>h2]:text-2xl sm:[&>h2]:text-4xl lg:[&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:py-4 [&>p>img]:rounded-2xl [&>p]:text-lg [&>p]:py-4 [&>p]:leading-8">
      {render(blok.content)}
    </main>
  );
};
export default Content;

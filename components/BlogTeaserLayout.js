import Link from "next/link";

const BlogTeaserLayout = ({ children, blok }) => {
  // console.log("blog teaser", blok.content[0].title);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10 mx-auto max-w-7xl px-7">
        {children}
      </div>
    </>
  );
};

export default BlogTeaserLayout;

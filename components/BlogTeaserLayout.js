const BlogTeaserLayout = ({ children, story }) => {
  // console.log('story', story)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-14 mx-auto max-w-7xl px-7">
      {children}
    </div>
  );
};

export default BlogTeaserLayout;

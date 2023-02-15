import Navigation from "./Navigation";

const Layout = ({ children, story }) => {
  // console.log('story', story)
  return (
    <>
      <Navigation blok={story?.content} />
      {children}
    </>
  );
};

export default Layout;

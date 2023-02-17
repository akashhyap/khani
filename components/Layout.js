import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children, story }) => {
  // console.log('story', story)
  return (
    <>
      <Navigation blok={story?.content} />
      {children}

      <Footer blok={story?.content} />
    </>
  );
};

export default Layout;

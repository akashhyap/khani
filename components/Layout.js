import Navigation from "./Navigation";
import Footer from "./Footer";
const Layout = ({ children, story }) => {
  // console.log('story', story)
  return (
    <>
      <Navigation blok={story?.content} />
      {children}
      <footer className="bg-slate-50 border-t-2 border-slate-100">
        <Footer blok={story?.content} />
      </footer>
    </>
  );
};

export default Layout;

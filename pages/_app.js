import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Head from "next/head";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import HeroHome from "../components/HeroHome";
import Blog from "../components/Blog";
import HeroAllBlog from "../components/HeroAllBlog";
import Alimentazione from "../components/Alimentazione";
import GuideUtili from "../components/GuideUtili";
import Breed from "../components/Breed";
import BlogAuthorInfo from "../components/BlogAuthorInfo";
import FeaturedImage from "../components/FeaturedImage";
import Title from "../components/Title";
import Content from "../components/Content";
import FooterColumn from "../components/FooterColumn";
import FooterMenu from "../components/FooterMenu";

import { useEffect } from "react";

const components = {
  grid: Grid,
  page: Page,
  menu: Menu,
  herohome: HeroHome,
  blog: Blog,
  heroAllBlog: HeroAllBlog,
  alimentazione: Alimentazione,
  "guide-utili": GuideUtili,
  breed: Breed,
  title: Title,
  content: Content,
  footerColumn: FooterColumn,
  footerMenu: FooterMenu,
  blogAuthorInfo: BlogAuthorInfo,
  featuredImage: FeaturedImage,
};

storyblokInit({
  accessToken: "EpGS5VAl9MhO00NX7jjKpAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout story={pageProps.config}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

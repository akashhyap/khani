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
import Salute from "../components/Salute";
import Breed from "../components/Breed";
import BlogAuthorInfo from "../components/BlogAuthorInfo";
import FeaturedImage from "../components/FeaturedImage";
import Title from "../components/Title";
import Content from "../components/Content";
import FooterColumn from "../components/FooterColumn";
import FooterMenu from "../components/FooterMenu";
import FluidLayout from "../components/FluidLayout";
import RelatedArticles from "../components/RelatedArticles";
import Newsletter from "../components/Newsletter";
import TableOfContent from "../components/TableOfContent";
import HeroStyle from "../components/HeroStyle";
import ImageOverlayCard from "../components/ImageOverlayCard";
import CardItem from "../components/CardItem";
import Category from "../components/Category";
import ArticleLists from "../components/ArticleLists";
import Insights from "../components/Insights";
import InsightsCard from "../components/InsightsCard";
import HorizontalCardItem from "../components/HorizontalCardItem";

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
  salute: Salute,
  breed: Breed,
  title: Title,
  content: Content,
  footerColumn: FooterColumn,
  footerMenu: FooterMenu,
  blogAuthorInfo: BlogAuthorInfo,
  featuredImage: FeaturedImage,
  fluidLayout: FluidLayout,
  "related-articles": RelatedArticles,
  newsletter: Newsletter,
  tableOfContent: TableOfContent,
  "hero-style": HeroStyle,
  "image-overlay-card": ImageOverlayCard,
  "card-item": CardItem,
  category: Category,
  "article-lists": ArticleLists,
  insights: Insights,
  "insights-card": InsightsCard,
  HorizontalCardItem: HorizontalCardItem,
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

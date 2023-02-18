import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterMenu = ({ blok }) => {
  // console.log("footer link", blok);
  return (
    <li className="leading-loose">
      <Link
        href={`/${blok.link.cached_url}`}
        {...storyblokEditable(blok)}
        legacyBehavior
      >
        <a className="text-white hover:underline underline-offset-4">{blok.title}</a>
      </Link>
    </li>
  );
};
export default FooterMenu;

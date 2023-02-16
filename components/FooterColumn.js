import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

const FooterColumn = ({ blok }) => {
    console.log("footer blok", blok);
  return (
    <div>
      <h3 className="uppercase font-semibold pb-3">{blok.heading}</h3>
      <ul className="list-none">
        {blok.column.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;

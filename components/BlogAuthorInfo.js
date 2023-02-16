// International Date formatter
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogAuthorInfo = ({ blok }) => {
    // console.log("BlogAuthorInfo", blok);

  const isPageComponent = blok.component == "page";
  let date = !isPageComponent && new Date(blok.date.split(" ")[0]);

  return (
    <div className="flex items-center my-9 meta_info">
      <figure className="mr-2 basis-1/4 md:basis-auto">
        {blok.image.filename && (
          <img
            className="w-[46px] h-[46px] object-center rounded-full author_img"
            alt={blok.image.alt}
            src={`${blok.image.filename}/m/`}
          />
        )}
      </figure>
      <div className="text-base text-white hover:text-gray-100 font-light">
        <span className="mr-1 pseudo_blok">{blok.authorName}</span>
        <span className="mr-1">{blok.lastUpdated}</span>
        {blok.date && (
          <span>{dateFormatter.format(date)}</span>
        )}
      </div>
    </div>
  );
};

export default BlogAuthorInfo;

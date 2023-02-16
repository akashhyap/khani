  const Title = ({ blok }) => {
    // console.log("Title", blok);
 
    return (
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight pt-5 mb-7 leading-tight lg:leading-[3.25rem]">
        {blok.title}
      </h1>
    );
  };
  
  export default Title;
  
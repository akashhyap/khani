import Link from "next/link";
import { useState } from "react";
import searchContent from "../pages/lib/_search";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
      return;
    }

    const results = await searchContent(query);
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      <form className="w-full">
        <div className="flex md:flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-3/4 md:w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={searchQuery}
              onChange={handleSearchInput}
              className="py-3 px-4 block w-full border-gray-400 border shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <span
            onClick={handleClearSearch}
            className="flex min-w-fit px-2 py-3 cursor-pointer hover:underline hover:underline-offset-4"
          >
            Clear search
          </span>
        </div>
      </form>

      {/* Search results */}
      <div className="py-6">
        {searchResults.length > 0 && (
          <ul className="bg-slate-100 p-4 rounded-md">
            {searchResults.map((result) => (
              <li key={result.title} className="leading-8">
                <a href={`/${result.link}`}>{result.title}</a>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        )}
      
      </div>
    </>
  );
}

import React, { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import HomePageImg from "./HomePageIcon";
import FetchMovie from "./FetchMovie";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  const clear = () => {
    setQuery("");
    setSearchMovie("");
  };

  const search = (e) => {
    e.preventDefault();
    setSearchMovie(query);
  };

  return (
    <>
      <div className="main">
        <form className="form" onSubmit={search}>
          <input
            className="input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search your favourite movie"
          />
          <SearchIcon className="searchBtn" onClick={search} />
          {query.length > 0 ? (
            <ClearIcon className="clearSearch" onClick={clear} />
          ) : null}
        </form>
        {/* {movies.length > 0 ? <h3 className = "context">{`Showing search results for "${query}" `}</h3> : null} */}
        {searchMovie.length > 0 ? (
          <FetchMovie searchMovie={searchMovie} />
        ) : (
          <HomePageImg />
        )}
      </div>
    </>
  );
};
export default HomePage;

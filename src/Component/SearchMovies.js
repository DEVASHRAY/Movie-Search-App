import React, { useState } from "react";
import MovieCards from "./MovieCard";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from '@material-ui/icons/Clear';
import NoResult from "./NoData.js"
import HomePageImg from "./HomePage"


const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=688e4882d073e06661d55fe1cbf5e349&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const clear = () => {
      setQuery("")
  }

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
              placeholder="Search a movie"
            />
            <SearchIcon className="searchBtn" onClick = {search} />
            {query.length > 0 ? <ClearIcon className = "clearSearch"  onClick = {clear}/> : null }
        </form>
            {movies.length > 0 ? <h3 className = "context">{`Showing search results for "${query}" `}</h3> : null}
      {movies.length !== 0 ?  <div className="card--list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <MovieCards value={movie} key={movie.id} />;
          })}
      </div> : <NoResult/>}
      </div>
      {query.length === 0 ? <HomePageImg/> : null }
    </>
  );
};
export default SearchMovies;

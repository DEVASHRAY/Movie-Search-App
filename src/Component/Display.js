import React, { useState, useEffect } from "react";
import MovieCards from "./MovieCard";
import NoResult from "./NoData.js";

const Display = (props) => {
  const { searchMovie , clear } = props;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNoFound] = useState(false);

  // useEffect( () => {
  //     if(movies.length === 0){
  //         setNoFound(true)
  //     }
  // } , [movies])

  console.log(notFound);
  useEffect(() => {
    if (searchMovie.length > 0) {
      search();
    }
  }, [searchMovie]);

  const search = async (e) => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=688e4882d073e06661d55fe1cbf5e349&language=en-US&query=${searchMovie}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
      setIsLoading(false);
      if (data.results.length === 0) {
        setNoFound(true);
      } else {
        setNoFound(false);
      }
    } catch (err) {
      return "ASDASDASDASDSAD";
    }
  };
  //   console.log(search);

  return (
    <>
      {searchMovie.length > 0 ? (
        <p className="context">{`Showing search results for "${searchMovie}"`}</p>
      ) : null}
      {movies.length > 0 ? (
        <div className="card--list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => {
              return <MovieCards value={movie} key={movie.id} />;
            })}
        </div>
      ) : (
        null
      )}
      {isLoading && <p className="context">Loading...</p>}
      {notFound && <NoResult />}
    </>
  );
};

export default Display;

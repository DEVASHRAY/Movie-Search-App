import React , {useState , useEffect} from "react"
import MovieCards from "./MovieCard";
import NoResult from "./NoData.js";

const Display = (props) => {
    const {searchMovie} = props;
    const [movies, setMovies] = useState([]);


        useEffect(() => {
            if(searchMovie.length > 0){
                search();
            }
        }, [searchMovie])
    
    const search = async (e) => {
        
    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=688e4882d073e06661d55fe1cbf5e349&language=en-US&query=${searchMovie}&page=1&include_adult=false`;
    
        try {
          const res = await fetch(url);
          const data = await res.json();
          setMovies(data.results);
        } catch (err) {
            console.log("ERR");
        }
      };
      console.log(search);



    return(
        <>
        {searchMovie.length > 0 ? <p className = "context">{`Showing search results for "${searchMovie}"`}</p> : null }
        {movies.length > 0 ? <div className = "card--list">
       { (movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <MovieCards value={movie} key={movie.id} />;
          }))}
        </div> :  <p className = "context">Loading...</p> }
        
    </>)
      
}

export default Display;
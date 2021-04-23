import React, { useState } from "react"
import MovieCards from "./MovieCard"

const SearchMovies = () => {

    const [query , setQuery] = useState("");
    const [movies , setMovies] =useState([])

    const search = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=688e4882d073e06661d55fe1cbf5e349&language=en-US&query=${query}&page=1&include_adult=false`

        try{
            const res =await  fetch(url);
            const data =await res.json();
            setMovies(data.results)
            console.log(data.results);
        }catch(err){
            console.log(err)
        }
     
    
    }
    return(
        <>
          <div className="main">
                <form className = "form" onSubmit = {search}>
                    <label className = "label">Movie Name</label>
                    <input  className = "input" 
                            type = "text"
                             value = {query}
                             onChange = {(e) => {setQuery(e.target.value)}}
                            placeholder = "Search a movie"/>
                    <button className="search" 
                            type="submit"> SEARCH
                    </button> 
                </form>
          </div>
          <div className="card--list">
            {movies.filter((movie) => movie.poster_path).map( (movie) => {
                return <MovieCards value = {movie} key={movie.id} />
                })}
          </div>
            
            
        </>
    )
}
export default SearchMovies;
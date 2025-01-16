import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

function Movies({handleAddToWatchList, handleRemoveFromWatchList, watchlist}) {
  let [movies, setMovies] = useState([]);
  let [pageNo, setPageNo] = useState(1);


  function IncPageNo() {
    setPageNo(pageNo++);
  }

  function DecPageNo() {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo--);
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=78b1a6eb87e7d56da840a2581f2e3e32&language=en-US&page=${pageNo}`
      )
      .then((output) => {
        setMovies(output.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-center font-bold text-2xl gap-3px m-5">
        Trending Movies
      </div>
      <div className="flex justify-around flex-wrap gap-4">
        {movies.map((movie) => {
          return (
            <MovieCard
              poster_path={movie.poster_path}
              title={movie.original_title}
              movie = {movie}
              handleAddToWatchList = {handleAddToWatchList}
              handleRemoveFromWatchList = {handleRemoveFromWatchList}
              watchlist = {watchlist}
              key={movie.id}
            />
          );
        })}
      </div>
      <div>
        <Pagination pageNo={pageNo} inc={IncPageNo} dec={DecPageNo} />
      </div>
    </div>
  );
}

export default Movies;

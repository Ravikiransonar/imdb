import React from "react";

function MovieCard({
  poster_path,
  title,
  movie,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[35vh] w-[150px] bg-cover bg-center  rounded-xl hover:scale-110 duration-700 cursor-pointer relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movie)}
          className="absolute top-2 right-3 p-1 bg-gray-900/60 rounded-lg"
        >
          &#10006;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movie)}
          className="absolute top-2 right-3 p-1 bg-gray-900/60 rounded-lg"
        >
          &#128525;
        </div>
      )}

      <div className="text-white absolute bottom-0 text-center w-full text-xl p-2 bg-gray-900/60">
        {title}
      </div>
    </div>
  );
}

export default MovieCard;

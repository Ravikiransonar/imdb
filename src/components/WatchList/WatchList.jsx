import React, { useEffect, useState } from "react";
import genreids from "../../Utility/Genre";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  let [search, setSearch] = useState("");
  let [genreList, setGenreList] = useState(["All Genre"]);
  let [currentgenre, setCurrentGenre] = useState("All Genre");


  function handleChange(event) {
    setSearch(event.target.value);
  }

  function sortIncreasing() {
    let sortIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortIncreasing]);
  }

  function sortDecreasing() {
    let sortDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortDecreasing]);
  }

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    setGenreList(["All Genre", ...temp]);
  }, [watchlist]);

  function handleGenreBlueColor(genre) {
    setCurrentGenre(genre);
  }


  return (
    <>
      <div className="flex justify-center m-4 flex-wrap">
        {genreList.filter((genre, index) => {
          return genreList.indexOf(genre) === index
        }).map((genre) => {
          return (
            <div
              onClick={() => handleGenreBlueColor(genre)}
              className={`border-2 h-[3rem] w-[9rem] text-center text-white font-bold rounded-lg py-3 mx-4 ${
                currentgenre === genre ? 'bg-blue-400' : 'bg-gray-400'
              }`}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-5">
        <input
          onChange={handleChange}
          value={search}
          type="text"
          placeholder="search movies"
          className="w-64 h-10 bg-gray-200 outline-none p-4"
        />
      </div>
      <div className="border-2 rounded-lg m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 text-center">
            <tr>
              <th>{}</th>
              <th className="flex items-center">
                <div onClick={sortIncreasing} className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                    />
                  </svg>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((wl)=> {
              if (currentgenre == "All Genre") {
                return true;
              } else {
                return genreids[wl.genre_ids[0]] == currentgenre;
              }
            })
              .filter((wl) => {
                return wl.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((wl) => {
                return (
                  <tr className="border-b-2">
                    <td className="px-6 py-4 flex items-center">
                      <img
                        className="h-[8rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original${wl.backdrop_path}`}
                      />
                      <div className="pl-24">{wl.title}</div>
                    </td>
                    <td>{wl.vote_average}</td>
                    <td>{wl.popularity}</td>
                    <td>{genreids[wl.genre_ids[0]]}</td>
                    <td onClick={() => (handleRemoveFromWatchList(wl))} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

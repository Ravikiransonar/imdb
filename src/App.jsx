import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import WatchList from "./components/WatchList/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  function handleAddToWatchList(movie) {
    const newWatchList = [...watchlist, movie];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  }

  function handleRemoveFromWatchList(movie) {
    const filteredWatchList = watchlist.filter((wl) => {
      return wl.id != movie.id;
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (!moviesFromLocalStorage) {
      return
    } else {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
   
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList = {handleRemoveFromWatchList} watchlist = {watchlist} />
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList watchlist= {watchlist} setWatchList = {setWatchList} handleRemoveFromWatchList ={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

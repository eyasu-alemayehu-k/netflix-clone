import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Constants/Axios";
import requests from "../../Constants/Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    try {
      const fetchMovie = await axios.get(requests.fetchNetflixOriginals);
      // console.log(fetchMovie.data.results)
      setMovie(
        fetchMovie.data.results[
          Math.floor(Math.random() * fetchMovie.data.results.length)
        ]
      );
    } catch {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // backgroundAttachment: "scroll",
      }}
    >
      <h2 className="banner__title">{movie.name}</h2>
      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Constants/Axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Path = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, largeImage }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchMovie = await axios.get(fetchUrl);
      // console.log(fetchMovie.data.results)
      setMovies(fetchMovie.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  // console.log(movies)

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          const key = movie.id;
          return (
            <img
              key={key}
              src={`${Path}${
                largeImage ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${largeImage && "row__posterLarge"}`}
              onClick={() => handleClick(movie)}
            />
          );
        })}
        ;
      </div>
      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;

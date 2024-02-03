import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "../Banner/Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error message", error);
      }
    })();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    // Banner start her
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      {/* Banner contents start here */}
      <div className="banner_contents">
        {/* Banner heading start here */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* Banner heading end here */}
        </h1>

        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
        {/* banner buttons start here */}
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">More Info</button>
          {/* banner buttons end here */}
        </div>
        {/* Banner contents end here */}
      </div>

      <div className="banner_fadeBottom" />
      {/* Banner end her */}
    </div>
  );
};
export default Banner;

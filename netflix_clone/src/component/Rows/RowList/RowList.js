import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
function RowList() {
  return (
    <>
      
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
        <Row title="HistoryMovies" fetchUrl={requests.fetchHistoryMovies} />
        <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
        <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
        <Row title="Western movies" fetchUrl={requests.fetchWesternMovies} />
        <Row
          title="Adventure movies"
          fetchUrl={requests.fetchAdventureMovies}
        />
    </>
  );
}
export default RowList;

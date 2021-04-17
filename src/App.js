import './App.css';
import Row from './components/Row/Row';
import requests from "./constants/requests";
import React from "react";
import Banner from './components/Banner/Banner';
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <div className="app">
        <Nav />
        <Banner />

        <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;

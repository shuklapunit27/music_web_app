import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/assets/cards/Cards_data.js";
import { Link } from "react-router-dom";

//  http://www.omdbapi.com/?i=tt3896198&apikey=b0abff41

const API_KEY = "b0abff41";

const TitleCards = ({ title, category = "avengers" }) => {
  const cardsRef = useRef();

  const [movies, setMovies] = useState([]);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search); // Search contains the array of movies
      } else {
        setMovies([]); // No results
        console.log("OMDB ERROR", data.Error);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {/* {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })} */}
        {movies.map((movie, index) => (
          // <Link to={`/player/${movie.imdbID}`} className="card" key={index}>
          <Link to={`/player/50`} className="card" key={index}>
            <img
              src={
                movie.Poster != "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.Title}
            />
            <p>{movie.Title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;

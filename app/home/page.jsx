"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import { CircularProgress } from "@mui/material";
import Link from "next/link";

const MovieRecommendations = () => {
  const [movieName, setMovieName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [rating, setRating] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchSuggestions = async (query) => {
    if (query.length < 2) return setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=918cce94627c68fa3cb45b04c4dc0691&query=${query}`
      );
      const data = await response.json();
      setSuggestions(data.results.map((movie) => movie.title));
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
    }
  };

  const handleMovieChange = (e) => {
    setMovieName(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    setError(false)
    try {
      const response = await fetch(
        `https://recommender-system-backend-d3xf.onrender.com/recommend?user_id=${movieName}&rating=${rating}`
      );
      // const response = await fetch(
      //   `http://127.0.0.1:5000/recommend?user_id=${movieName}&rating=${rating}`
      // );
      if (response.status != 200) {
        setError(true);
      } else {
        const data = await response.json();
        setRecommendations(data);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    setLoading(false);
  };

  return (
    <div className={"container"}>
      <h1>Movie Recommendations</h1>
      <div className={"inputContainer"}>
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={movieName}
          onChange={handleMovieChange}
          className={"inputBox"}
          list="suggestions"
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>

        <input
          type="text"
          placeholder="Enter Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className={"inputBox"}
        />
        <button onClick={fetchRecommendations} className={"searchButton"}>
          Get Recommendations
        </button>
      </div>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <span
          style={{
            color: "white",
            backgroundColor: "red",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "inline-block",
            marginTop: "20px",
            textTransform: "uppercase",
          }}
        >
          🚫 Movie Not Found
        </span>
      ) : (
        <div className={"grid"}>
          {recommendations.map((movie,key) => (
            <Link href={`/Movie/${movie.movieId}`} passHref key={key}>
            <div key={movie.movieId} className={"card"} style={{ cursor: "pointer" }}>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={200}
                height={300}
                className={"poster"}
              />
              <h3 style={{ color: "black" }}>{movie.title}</h3>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
            </div>
          </Link>
          
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieRecommendations;

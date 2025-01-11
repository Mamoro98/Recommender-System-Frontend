'use client'
import React, { useState } from "react";
import "./SearchFrom.css";

const SearchForm = () => {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/recommend?user_id=${movieName}&rating=${rating}`
      );
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter the user ID"
        className="search-box"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the rating"
        className="search-box"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>

      <div className="recommendations">
        {recommendations.length > 0 ? (
          recommendations.map((movie) => (
            <div style={{color:"red"}} key={movie.movieId} className="movie-card">
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>No recommendations yet.</p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;

'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";

const MovieRecommendations = () => {
  const [userId, setUserId] = useState("");
  const [rating, setRating] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/recommend?user_id=${userId}&rating=${rating}`
      );
      const data = await response.json();
      setRecommendations(data);
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
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={"inputBox"}
        />
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
        <p>Loading...</p>
      ) : (
        <div className={"grid"}>
          {recommendations.map((movie) => (
            <div key={movie.movieId} className={"card"}>
              <Image
                src={movie.poster}
                alt={movie.title}
                width={200}
                height={300}
                className={"poster"}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieRecommendations;

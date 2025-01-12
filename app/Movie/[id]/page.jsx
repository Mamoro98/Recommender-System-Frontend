"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import "./style.css";
import { useParams } from "next/navigation";

const MovieDetails = () => {
  const router = useParams();
  const movieId = router.id;
  console.log(movieId)

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId);
    }
  }, [movieId]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=918cce94627c68fa3cb45b04c4dc0691`
      );
      if (response.status !== 200) {
        setError(true);
      } else {
        const data = await response.json();
        setMovieDetails(data);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setError(true);
    }
    setLoading(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error || !movieDetails) {
    return (
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
        🚫 Movie Details Not Found
      </span>
    );
  }

  return (
    <div className="details-container">
      <h1>{movieDetails.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width={300}
        height={450}
        className="details-poster"
      />
      <p><strong>Overview:</strong> {movieDetails.overview}</p>
      <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
      <p><strong>Rating:</strong> {movieDetails.vote_average}</p>
      <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>
      <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(", ")}</p>
    </div>
  );
};

export default MovieDetails;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./style.module.css";
import Link from "next/link";

const MoviesByGenre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=918cce94627c68fa3cb45b04c4dc0691`
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const fetchMoviesByGenre = async (genreId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=918cce94627c68fa3cb45b04c4dc0691&with_genres=${genreId}`
      );
      const data = await response.json();
      setMovies(data.results);
      setSelectedGenre(genreId);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Browse Movies by Genre</h1>
        <div className={styles.genreList}>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={`${styles.genreButton} ${selectedGenre === genre.id ? styles.active : ""}`}
              onClick={() => fetchMoviesByGenre(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className={styles.movieGrid}>
            {movies.map((movie,key) => (
            <Link href={`/Movie/${movie.id}`} passHref key={key}>

              <div key={movie.id} className={styles.movieCard}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className={styles.poster}
                />
                <h3>{movie.title}</h3>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesByGenre;

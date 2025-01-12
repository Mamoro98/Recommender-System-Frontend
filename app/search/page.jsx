"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=918cce94627c68fa3cb45b04c4dc0691&query=${query}`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        setError(true);
      } else {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Search for Movies</h1>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>

        {loading ? (
          <p>Loading movies...</p>
        ) : error ? (
          <p className={styles.error}>
            🚫 No movies found. Try another search!
          </p>
        ) : (
          <div className={styles.movieGrid}>
            {movies.map((movie,key) => (
              <Link href={`/Movie/${movie.id}`} passHref key={key}>
                <div key={movie.id} className={styles.movieCard}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
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

export default SearchMovies;

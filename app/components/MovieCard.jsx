import React from 'react';
import './style.css';
import Image from 'next/image';

const MovieCard = ({ poster, title, rating, description }) => {
  return (
    <div className="movie-card">
      <Image width={100} height={100} src={poster} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>
              &#9733;
            </span>
          ))}
        </div>
        <p className="movie-description">{description}</p>
        <button className="watch-now-button">Watch Now</button>
      </div>
    </div>
  );
};

export default MovieCard;

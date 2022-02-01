import './MovieCard.css'
import React from 'react';
import MovieCard from './MovieCard';

function MovieListe (props) {
  return (
    <>
    {props.movies.map((movie) => (
      <div className='image-container'>
        <MovieCard movie={movie}/>
      </div>
    ))}
    </>
  )
}


export default MovieListe;


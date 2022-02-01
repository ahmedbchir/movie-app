import StarRatingComponent from 'react-star-rating-component';


import React from 'react';

const MovieCard = ({movie}) => {
  return <div>
<div className="card movie_card">
		  <img src={movie.Poster} className="card-img-top" alt="..."/>
		  <div className="card-body">
		   <h5 className="card-title">{movie.Title}</h5>
		<span className="Description">{movie.Description}</span>
		<span className="movie_info float-right">{movie.Rating} / 5</span>
		 <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.Rating}
        
        />
		  </div>
		</div>
  </div>;
};

export default MovieCard;


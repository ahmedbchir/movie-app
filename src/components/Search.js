import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
function Search({search,movie,setRate}) {
  const onStarClick = (nextValue, prevValue, name)=> {
    setRate({rating: nextValue});
  }
  return (
    <div>
      <input
       type={"text"}
        placeholder="Search"
       onChange={(e)=> search(e.target.value)}
        /> 
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.Rating}
          onStarClick={onStarClick}
                />  
                 
    </div>
  );
};


export default Search ;

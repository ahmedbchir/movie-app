import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
function Search({search,movie,setRate}) {
  return (
    <div>
      <input
       type={"text"}
        placeholder="Search"
       onChange={(e)=> search(e.target.value)}
        /> 
        {/* <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.Rating}
                />  
                 */}
    </div>
  );
};


export default Search ;

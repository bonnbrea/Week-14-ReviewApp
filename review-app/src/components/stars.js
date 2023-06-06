import React, { useState } from 'react';


const Stars = () => {
  const [rating, setRating] = useState(null);
  return (
   <div>
    {[ ...Array(5)].map((star,i) => {
      const ratingValue = i + 1;

      return (
        <label>
          <input
          type="radio"
          name="rating"
          value={ratingValue}
          onClick={() => setRating(ratingValue)}
          />
          <span
          className="star"
          >&#9733;</span>
        </label>
      );
    })}
   </div>
  );
};

export default Stars;
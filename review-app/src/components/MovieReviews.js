
import Stars from './stars';
import AddComment from './Addcomment';
import React from 'react';


function MovieReview({ movies, setMovies }) {
  let showMovieReviews = movies.map((movie, i) => {
    let comments;
    if (movie.comments) {
      comments = movie.comments.map((comment, i) => {
        return (
          <p>
            {comment.text}
          </p>
        );
      });
    }
   
    return (
      <div key={i}>
        <h1>{movie.name}</h1>
        <img style={{ width: '300px' }} src={movie.image} />
        <h3>Synopsis: {movie.synopsis}</h3>
        <h3>Rating: {movie.rate}</h3>
       
        {movies.comments ? { comments } : null}
        <AddComment />
        <Stars />


      </div>
    );
  });


  return (
    <div className= "center">
      {showMovieReviews}
    </div>
  );
}
export default MovieReview;


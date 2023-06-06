import React, { useState } from 'react';
import MovieReview from './MovieReviews';


let initialMovies = [
    {
      image:'https://cdn.vox-cdn.com/thumbor/gVdHpxNPlsVmU8ULm8pnYofUeqU=/0x0:1916x764/1200x800/filters:focal(555x100:861x406)/cdn.vox-cdn.com/uploads/chorus_image/image/71887686/image_2023_01_19_171625080.0.png',
      name: 'Scream 6',
      rate: '3.8',
      synopsis:
        'Four survivors of the Ghostface murders leave Woodsboro behind for a fresh start in New York City. However, they soon find themselves in a fight for their lives when a new killer embarks on a bloody rampage.'
    },
    {
      image: 'https://www.heavenofhorror.com/wp-content/uploads/2023/04/evil-dead-rise-2023-review.jpg',
      name: 'Evil Dead Rise',
      rate: '4.2',
      synopsis:
        'A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.'
    },
    {
      image:'https://movies.universalpictures.com/media/05-ren-dm-mobile-banner-1080x745-now-rr-f01-040723-1-6438b9aff38b4-1.jpg',
      name: 'Renfield',
      rate: '3.9',
      synopsis:
        'Renfield, the tortured aide to his narcissistic boss, Dracula, is forced to procure his master and do his every bidding. However, after centuries of servitude, he is ready to see if there is a life outside the shadow of the Prince of Darkness.'
    }
  ];
  
  
  
  
  
  
  function ReviewPage () {
    let [movies, setMovies] = useState(initialMovies);
    return (
    <div>
       
 
        <MovieReview movies={movies} setMovies={setMovies} />
      </div>
    );
}
export default ReviewPage;
import React from 'react';

import './Movie.scss';

const Movie = ({ navbarLeave, selectedMovie, movie }) => {
  return (
      <div id="movie-container">
        <img id="movie-background-image" src={ selectedMovie[0].image }/>
        <button id="test2">Push Me</button>
      </div>
  );
}

export default Movie;

import React from 'react';

import './Movie.scss';

import Theater from './../Theater/Theater.jsx';

const Movie = ({ navbarLeave, selectedMovie, movie, buyTicket }) => {
  return (
      <div onCLick={navbarLeave} id="movie-container">
        <img id="movie-background-image" src={ selectedMovie[0].image }/>
        <button id="test2" onClick={ buyTicket }>Push Me</button>
        <input type="text"/>
        <Theater />
      </div>
  );
}

export default Movie;

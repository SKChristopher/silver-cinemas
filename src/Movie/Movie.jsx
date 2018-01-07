import React from 'react';

import './Movie.scss';

import Theater from './../Theater/Theater.jsx';

const Movie = ({ navbarLeave, selectedMovie, movie, buyTicket, selectSeat, theater1, theater2, theater3, theater4, theater5 }) => {
  return (
      <div onCLick={navbarLeave} id="movie-container">
        <img id="movie-background-image" src={ selectedMovie[0].image }/>
        <button id="test2" onClick={ buyTicket }>Push Me</button>
        <input type="text"/>
        <Theater
          buyTicket={buyTicket} 
          selectSeat={selectSeat}
          selectedMovie={selectedMovie}
          theater1={theater1}
          theater2={theater2}
          theater3={theater3}
          theater4={theater4}
          theater5={theater5}
          />
      </div>
  );
}

export default Movie;

import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Movie.scss';

import Theater from './../Theater/Theater.jsx';
import Trailer from './../Trailer/Trailer.jsx';

const Movie = ({ playTrailer, cancelPurchase, navbarLeave, selectedMovie, movie, buyTicket, selectSeat, theater1, theater2, theater3, theater4, theater5, display, closeTheater, displayFade2, showTheater }) => {
  return (
      <div onCLick={navbarLeave} id="movie-container">
        <Trailer 
          selectedMovie = {selectedMovie}
          />
        <img id="movie-background-image" src={ selectedMovie[0].image }/>
        <button id="purchase-ticket" onClick={ showTheater }>Purchase Tickets for {selectedMovie[0].title}</button>
        <button className="play-button" onClick={playTrailer}><FontAwesome name="play-circle-o" /> Play Trailer</button>
        <Theater
          buyTicket={buyTicket} 
          selectSeat={selectSeat}
          selectedMovie={selectedMovie}
          theater1={theater1}
          theater2={theater2}
          theater3={theater3}
          theater4={theater4}
          theater5={theater5}
          display={display}
          displayFade2={displayFade2}
          closeTheater={closeTheater}
          cancelPurchase={cancelPurchase}
          />
      </div>
  );
}

export default Movie;

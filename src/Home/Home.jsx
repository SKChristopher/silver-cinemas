import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Home.scss';

import Trailer from './../Trailer/Trailer.jsx';
import Theater from './../Theater/Theater.jsx';

const Home = ({ playTrailer, selectedMovie, buyTicket, selectSeat, theater1, theater2, theater3, theater4, theater5, display, displayFade2, showTheater, closeTheater }) => {
  return (
    <div>
      <Trailer />
      <div id="home-container">
        <img id="background-image" src="https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg" />
        <div id="home-header">
          <h2 className="big-text">Tickets on sale now!</h2>
          <button className="get-tickets-button" onClick={showTheater}>Get Tickets</button>
          <button className="play-button" onClick={playTrailer}><FontAwesome name="play-circle-o" /> Play Trailer</button>
        </div>
      </div>
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
          />
    </div>
  );
}

export default Home;

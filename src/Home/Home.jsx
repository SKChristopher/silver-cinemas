import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Home.scss';

import Trailer from './../Trailer/Trailer.jsx';

const Home = ({ playTrailer }) => {
  return (
    <div>
      <Trailer />
      <div id="home-container">
        <img id="background-image" src="https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg" />
        <div id="home-header">
          <h2 className="big-text">Tickets on sale now!</h2>
          <button className="get-tickets-button">Get Tickets</button>
          <button className="play-button" onClick={playTrailer}><FontAwesome name="play-circle-o" /> Play Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

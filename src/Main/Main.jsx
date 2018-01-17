import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home.jsx';
import Movie from './../Movie/Movie.jsx';

const Main = ({ cancelPurchase, navbarLeave, selectedMovie, movie, playTrailer, buyTicket, selectSeat, theater1, theater2, theater3, theater4, theater5, display, displayFade2, showTheater, closeTheater }) => (
  <main>
    <Switch>
      <Route exact path="/" component={() => (<Home
        navbarLeave={ navbarLeave }
        playTrailer={ playTrailer }
        buyTicket={ buyTicket }
        selectSeat={selectSeat}
        theater1={theater1}
        theater2={theater2}
        theater3={theater3}
        theater4={theater4}
        theater5={theater5}
        selectedMovie={ selectedMovie }
        display={display}
        displayFade2={displayFade2}
        showTheater={showTheater}
        closeTheater={closeTheater}
        />)} />
      <Route path="/tickets" component={() => (<Movie 
        navbarLeave={ navbarLeave }
        selectedMovie={ selectedMovie }
        movie={ movie }
        buyTicket={ buyTicket }
        selectSeat={selectSeat}
        theater1={theater1}
        theater2={theater2}
        theater3={theater3}
        theater4={theater4}
        theater5={theater5}
        display={display}
        displayFade2={displayFade2}
        closeTheater={closeTheater}
        showTheater={showTheater}
        cancelPurchase={cancelPurchase}
        playTrailer={ playTrailer }
        />)} />
    </Switch>
  </main>
);

export default Main;

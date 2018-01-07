import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home.jsx';
import Movie from './../Movie/Movie.jsx';

const Main = ({ navbarLeave, selectedMovie, movie, playTrailer, buyTicket, selectSeat, theater1, theater2, theater3, theater4, theater5 }) => (
  <main>
    <Switch>
      <Route exact path="/" component={() => (<Home
        navbarLeave={ navbarLeave }
        playTrailer={ playTrailer } />)} />
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
        />)} />
    </Switch>
  </main>
);

export default Main;

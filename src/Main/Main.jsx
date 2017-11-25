import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home.jsx';
import Movie from './../Movie/Movie.jsx';

const Main = ({ navbarLeave, selectedMovie, movie, playTrailer }) => (
  <main>
    <Switch>
      <Route exact path="/" component={() => (<Home
        navbarLeave={ navbarLeave }
        playTrailer={ playTrailer } />)} />
      <Route path="/tickets" component={() => (<Movie navbarLeave={ navbarLeave } selectedMovie={ selectedMovie } movie={ movie }/>)} />
    </Switch>
  </main>
);

export default Main;

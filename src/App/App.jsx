import React from 'react';
import axios from 'axios';

import Main from './../Main/Main.jsx';
import Navbar from './../Navbar/Navbar.jsx';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Guest',
      navbarView: '',
      selectedMovie: [
        {
          title: 'The Foreigner',
          image: "https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg",
          trailer: "https://www.youtube.com/embed/33iuQu3UtjI",
        },
      ],
      movie: [
        {
          title: 'The Foreigner',
          image: "https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg",
          trailer: 'https://www.youtube.com/embed/33iuQu3UtjI',
        },
        {
          title: 'Thor: Ragnarok',
          image: "http://cdn-static.denofgeek.com/sites/denofgeek/files/2017/10/thor_ragnarok.jpg",
          trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
        },
        {
          title: 'Justice League',
          image: "http://www.justiceleaguethemovie.com/img/gallery/img01.jpg",
          trailer: "https://www.youtube.com/embed/r9-DM9uBtVI",
        },
        {
          title: 'Kingsman: The Golden Circle',
          image: "https://weliveentertainment.com/wp-content/uploads/2017/09/KIngsman-2.jpg",
          trailer: "https://www.youtube.com/embed/6Nxc-3WpMbg",
        },
        {
          title: 'It',
          image: "https://www.hdwallpapers.in/walls/it_2017_5k-wide.jpg",
          trailer: "https://www.youtube.com/embed/xKJmEC5ieOk",
        },
      ],
    };
    this.handleSignInHover = this.handleSignInHover.bind(this);
    this.handleTicketsHover = this.handleTicketsHover.bind(this);
    this.handleFoodHover = this.handleFoodHover.bind(this);
    this.handleNavbarLeave = this.handleNavbarLeave.bind(this);
    this.handleSelectMovie = this.handleSelectMovie.bind(this);

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.handlePlayTrailer = this.handlePlayTrailer.bind(this);
  }

  // ----------------- navbar ----------------------------------- navbar ----------------------------------------- navbar -------------------------------------------------------
  handleSignInHover() {
    // let signinDropdown = document.getElementById('signin-dropdown');
    // signinDropdown.style.display = 'block';
    let navbarView = 'signin';
    this.setState({ navbarView });
  }

  handleTicketsHover() {
    let navbarView = 'tickets';
    this.setState({ navbarView });
  }

  handleFoodHover() {
    let navbarView = 'food';
    this.setState({ navbarView });
  }

  handleNavbarLeave() {
    let navbarView = '';
    this.setState({ navbarView });
  }

  handleSelectMovie(e) {
    const obj = Object.assign({}, this.state);
    let selectedMovie = obj.selectedMovie;
    const selection = e.target.id;
    const movie = obj.movie;
    selectedMovie = movie.filter((x) => {
      if (x.title === selection) {
        return x;
      }
    });
    this.setState({ selectedMovie });
    console.log(this.state.selectedMovie);
  }

  // ----------------- signin ----------------------------------- signin ----------------------------------------- signin -------------------------------------------------------
  handleSignIn(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let username = e.target.username.value;

    axios.post("verifyUser", {
      username: e.target.username.value,
      password: e.target.password.value
    })
    .then(response => {
      if (response.data !== false) {
        this.setState ({ username });
        console.log('Logged in as ' + username);
      } else { console.log('Invalid Login'); }
    });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  handleSignUp(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.state);
    let username = e.target.username.value;

    axios.post("createUser", {
      username: e.target.username.value,
      password: e.target.password.value
    })
    .then(response => {
      if (response.data === true) {
        this.setState ({ username });
        console.log('User created and logged in as ' + username);
      } else if (response.data !== true) {
        console.log('Error, account not created.');
        return;
      }
    });

    e.target.username.value = "";
    e.target.password.value = "";
  }

  // ----------------- play trailer ----------------------------------- play trailer ----------------------------------------- play trailer -------------------------------
  handlePlayTrailer() {
    let trailer = document.getElementById('fade');
    trailer.style.display = 'block';
    console.log('supfam');
  }

  render() {
    return (
      <div id="app-container">
        <Navbar
          navbarView={this.state.navbarView}
          signInHover={this.handleSignInHover}
          ticketsHover={this.handleTicketsHover}
          foodHover={this.handleFoodHover}
          navbarLeave={this.handleNavbarLeave}
          selectMovie={this.handleSelectMovie}
          signIn={this.handleSignIn}
          signUp={this.handleSignUp}
        />
        <Main
          navbarLeave={this.handleNavbarLeave}
          selectedMovie={this.state.selectedMovie}
          movie={this.state.movie}
          playTrailer={this.handlePlayTrailer}
        />
      </div>
    );
  }
}

export default App;

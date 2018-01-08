import React from 'react';
import axios from 'axios';

import Main from './../Main/Main.jsx';
import Navbar from './../Navbar/Navbar.jsx';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      username: 'Guest',
      navbarView: '',
      selectedSeat: 0,
      selectedMovie: [
        {
          title: 'The Foreigner',
          image: "https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg",
          trailer: "https://www.youtube.com/embed/33iuQu3UtjI",
          theater: "Theater 1",
        },
      ],
      movie: [
        {
          title: 'The Foreigner',
          image: "https://www.purefandom.com/wp-content/uploads/2017/10/The-Foreigner-Movie-Poster.jpg",
          trailer: 'https://www.youtube.com/embed/33iuQu3UtjI',
          theater: "Theater 1",
        },
        {
          title: 'Thor: Ragnarok',
          image: "http://cdn-static.denofgeek.com/sites/denofgeek/files/2017/10/thor_ragnarok.jpg",
          trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
          theater: "Theater 2",
        },
        {
          title: 'Justice League',
          image: "http://www.justiceleaguethemovie.com/img/gallery/img01.jpg",
          trailer: "https://www.youtube.com/embed/r9-DM9uBtVI",
          theater: "Theater 3",
        },
        {
          title: 'Kingsman: The Golden Circle',
          image: "https://weliveentertainment.com/wp-content/uploads/2017/09/KIngsman-2.jpg",
          trailer: "https://www.youtube.com/embed/6Nxc-3WpMbg",
          theater: "Theater 4",
        },
        {
          title: 'Star Wars: The Last Jedi',
          image: "https://wallpapersite.com/images/wallpapers/star-wars-the-last-jedi-2688x1512-hd-2017-10625.jpg",
          trailer: "https://www.youtube.com/watch?v=Q0CbN8sfihY",
          theater: "Theater 5",
        },
      ],
      theater1: {},
      theater2: {},
      theater3: {},
      theater4: {},
      theater5: {},
      display: {display:"none"},
    };
    this.handleSignInHover = this.handleSignInHover.bind(this);
    this.handleTicketsHover = this.handleTicketsHover.bind(this);
    this.handleFoodHover = this.handleFoodHover.bind(this);
    this.handleNavbarLeave = this.handleNavbarLeave.bind(this);
    this.handleSelectMovie = this.handleSelectMovie.bind(this);

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

    this.handlePlayTrailer = this.handlePlayTrailer.bind(this);
    this.handleBuyTicket = this.handleBuyTicket.bind(this);
    this.handleSelectSeat = this.handleSelectSeat.bind(this);
  }

  componentDidMount() {
    this.fetchTheaters();
  }

  fetchTheaters() {
    axios.get('/getTheaters')
      .then((response) => {
        const theaters = response.data;
        const theater1 = theaters[0];
        const theater2 = theaters[1];
        const theater3 = theaters[2];
        const theater4 = theaters[3];
        const theater5 = theaters[4];
        this.setState({ theater1, theater2, theater3, theater4, theater5 });
      });
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
          this.setState({ username });
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
          this.setState({ username });
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
  }

  // ----------------- theater ----------------------------------- theater ----------------------------------------- theater -------------------------------
  handleCreateTheater() {
    const num = this.state.num;
    axios.post("createTheater", {
      name: 'Theater ' + num,
      seats: [
        'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
        'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
        'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
        'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
        'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
      ],
    })
      .then(response => {
        if (response.data === true) {
          alert('Theater Created');
        } else if (response.data !== true) {
          alert('Error, theater not created');
          return;
        } 
      });
    this.state.num++;
  }

  handleSelectSeat(e) {
    // e.target.className = 'filled-seat';
    // console.log(e.target.className);

    let selectedSeat = Number(e.target.innerText) - 1;
    this.setState({ selectedSeat });
    console.log(Number(e.target.innerText));

    // let test = document.getElementById('confirmation');
    // console.log(test);
    // test.style.display = 'block';

    let display = {display:"block"};
    this.setState({display});

  }

  handleBuyTicket() {
    let display = {display:"none"};
    this.setState({display});
    console.log(this.state.selectedMovie[0].theater);
    let newSeats = null;
    switch (this.state.selectedMovie[0].theater) {
      case 'Theater 1':
        newSeats = this.state.theater1.seats;
        break;
      case 'Theater 2':
        newSeats = this.state.theater2.seats;
        break;
      case 'Theater 3':
        newSeats = this.state.theater3.seats;
        break;
      case 'Theater 4':
        newSeats = this.state.theater4.seats;
        break;
      case 'Theater 5':
        newSeats = this.state.theater5.seats;
        break;
    }
    newSeats[this.state.selectedSeat] = this.state.username;
    axios
      .post("updateTheater", {
        name: this.state.selectedMovie[0].theater,
        seats: newSeats,
      })
      .then(response => {
        if (response.data !== false) {
          console.log('theater updated');
        } else if (response.data === false) {
          alert('Error');
          return;
        }
      });
    
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
          buyTicket={this.handleBuyTicket}
          selectSeat={this.handleSelectSeat}
          theater1={this.state.theater1}
          theater2={this.state.theater2}
          theater3={this.state.theater3}
          theater4={this.state.theater4}
          theater5={this.state.theater5}
          display={this.state.display}
        />
      </div>
    );
  }
}

export default App;

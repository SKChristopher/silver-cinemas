import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = ({ selectMovie, navbarView, signInHover, ticketsHover, foodHover, navbarLeave, signIn, signUp }) => {
  if (navbarView === 'signin') {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <div onMouseOver={navbarLeave}><Link to="/"><img src="https://i.imgur.com/eCwZijX.png" alt="logo" id="logo" /></Link></div>
          <div className="nav-link" onMouseOver={signInHover}>
            Sign In
          </div>
          <div className="nav-link" onMouseOver={ticketsHover}>
            Tickets
          </div>
          <div className="nav-link" onMouseOver={foodHover}>
            Food & Drinks
          </div>
        </div>
        <div id="signin-dropdown">
          <form onSubmit={signIn}>
            <input autoComplete="off" id="username-box" type="text" placeholder="username" name="username"></input>
            <br />
            <input autoComplete="off" type="password" placeholder="password" name="password"></input>
            <br />
            <button type="submit">Sign In</button>
          </form>
          <form onSubmit={signUp}>
            <input autoComplete="off" type="text" placeholder="username" name="username"></input>
            <br />
            <input autoComplete="off" type="password" placeholder="password" name="password"></input>
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  } else if (navbarView === 'tickets') {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <div onMouseOver={navbarLeave}><Link to="/"><img src="https://i.imgur.com/eCwZijX.png" alt="logo" id="logo" /></Link></div>
          <div className="nav-link" onMouseOver={signInHover}>
            Sign In
          </div>
          <div className="nav-link" onMouseOver={ticketsHover}>
            Tickets
          </div>
          <div className="nav-link" onMouseOver={foodHover}>
            Food & Drinks
          </div>
        </div>
        <div id="tickets-dropdown">
          Select a Movie<br />
          <Link to="/tickets"><button className="movie-button" onClick={selectMovie} id="Thor: Ragnarok">Thor: Ragnarok</button></Link><br />
          <Link to="/tickets"><button className="movie-button" onClick={selectMovie} id="Justice League">Justice League</button></Link><br />
          <Link to="/tickets"><button className="movie-button" onClick={selectMovie} id="The Foreigner">The Foreigner</button></Link><br />
          <Link to="/tickets"><button className="movie-button" onClick={selectMovie} id="Kingsman: The Golden Circle">Kingsman: The Golden Circle</button></Link><br />
          <Link to="/tickets"><button className="movie-button" onClick={selectMovie} id="It">It</button></Link>
        </div>
      </div>
    );
  } else if (navbarView === 'food') {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <div onMouseOver={navbarLeave}><Link to="/"><img src="https://i.imgur.com/eCwZijX.png" alt="logo" id="logo" /></Link></div>
          <div className="nav-link" onMouseOver={signInHover}>
            Sign In
          </div>
          <div className="nav-link" onMouseOver={ticketsHover}>
            Tickets
          </div>
          <div className="nav-link" onMouseOver={foodHover}>
            Food & Drinks
          </div>
        </div>
        <div id="food-dropdown">
          Candy<br />
          Popcorn<br />
          Beverages<br />
          Hotdogs
        </div>
      </div>
    );
  } else {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <div onMouseOver={navbarLeave}><Link to="/"><img src="https://i.imgur.com/eCwZijX.png" alt="logo" id="logo" /></Link></div>
          <div className="nav-link" onMouseOver={signInHover}>
            Sign In
          </div>
          <div className="nav-link" onMouseOver={ticketsHover}>
            Tickets
          </div>
          <div className="nav-link" onMouseOver={foodHover}>
            Food & Drinks
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

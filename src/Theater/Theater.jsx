import React from 'react';

import './Theater.scss';

const Theater = ({ selectSeat, selectedMovie, theater1, theater2, theater3, theater4, theater5, buyTicket, display }) => {
  let theater = null;
  switch (selectedMovie[0].theater) {
    case 'Theater 1':
      theater = theater1.seats;
      break;
    case 'Theater 2':
      theater = theater2.seats;
      break;
    case 'Theater 3':
      theater = theater3.seats;
      break;
    case 'Theater 4':
      theater = theater4.seats;
      break;
    case 'Theater 5':
      theater = theater5.seats;
      break;
  }

  const arr = theater.map((theater, index) => {
    if (theater === 'o') {
      return (
        <div className="empty-seat" onClick={selectSeat}>{index + 1}</div>
      );
    } else return (
      <div className="filled-seat">{index + 1}</div>
    );
  });

  return (
    <div className="fade2">
      <div id="theater">
        {arr}
      </div>
      <div id="confirmation" style={display}>
        <div>Would you like to purchase this seat?</div><br /><br />
        <div className="confirmation-button" onClick={ buyTicket }> Yes </div><br />
        <div className="confirmation-button"> No </div>
      </div>
    </div>
  );
}

export default Theater;

import React from 'react';

import './Theater.scss';

const Theater = ({ cancelPurchase, selectSeat, selectedMovie, theater1, theater2, theater3, theater4, theater5, buyTicket, display, displayFade2, closeTheater }) => {
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
    let row = 'A';
    if (index === 10) { row = 'B' }
    if (index === 20) { row = 'C' }
    if (index === 30) { row = 'D' }
    if (index === 40) { row = 'E' }
    if (theater === 'o') {
      if (index === 10 || index === 20 || index === 30 || index === 40) {
        return (
          <div style={{display:"inline"}}><br />
            {row}
            <div className="empty-seat" onClick={selectSeat}>{index + 1}</div>
          </div>
        );
      } else
        return (
          <div className="empty-seat" onClick={selectSeat}>{index + 1}</div>
        );
    } else if (index === 10 || index === 20 || index === 30 || index === 40) {
      return (
        <div style={{display:"inline"}}><br />
          {row}
          <div className="filled-seat">{index + 1}</div>
        </div>
      );
    } else {
      return (
        <div className="filled-seat">{index + 1}</div>
      );
    }
  });

  return (
    <div className="fade2" style={displayFade2}>
      <div id="theater">
        Choose your seat:<br />
        --Screen--<br />
        A{arr}
        <br /><button onClick={closeTheater}>Close Theater</button>
      </div>
      <div id="confirmation" style={display}>
        <div>Would you like to purchase this seat?</div><br /><br />
        <div className="confirmation-button" onClick={buyTicket}> Yes </div><br />
        <div className="confirmation-button" onClick={cancelPurchase}> No </div>
      </div>
    </div>
  );
}

export default Theater;

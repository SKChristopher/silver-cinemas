import React from 'react';

import './Theater.scss';

const Theater = ({ selectSeat, selectedMovie, theater1, theater2, theater3, theater4, theater5 }) => {
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
    console.log(theater);
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
        {/* <div className="empty-seat" onClick={ selectSeat }>1</div>
        <div className="empty-seat" onClick={ selectSeat }>2</div>
        <div className="empty-seat" onClick={ selectSeat }>3</div>
        <div className="empty-seat" onClick={ selectSeat }>4</div>
        <div className="empty-seat" onClick={ selectSeat }>5</div>
        <div className="empty-seat" onClick={ selectSeat }>6</div>
        <div className="empty-seat" onClick={ selectSeat }>7</div>
        <div className="empty-seat" onClick={ selectSeat }>8</div>
        <div className="empty-seat" onClick={ selectSeat }>9</div>
        <div className="empty-seat" onClick={ selectSeat }>10</div>
        <div className="empty-seat" onClick={ selectSeat }>11</div>
        <div className="empty-seat" onClick={ selectSeat }>12</div>
        <div className="empty-seat" onClick={ selectSeat }>13</div>
        <div className="empty-seat" onClick={ selectSeat }>14</div>
        <div className="empty-seat" onClick={ selectSeat }>15</div>
        <div className="empty-seat" onClick={ selectSeat }>16</div>
        <div className="empty-seat" onClick={ selectSeat }>17</div>
        <div className="empty-seat" onClick={ selectSeat }>18</div>
        <div className="empty-seat" onClick={ selectSeat }>19</div>
        <div className="empty-seat" onClick={ selectSeat }>20</div> */}
      </div>
    </div>
  );
}

export default Theater;

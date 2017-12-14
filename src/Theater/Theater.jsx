import React from 'react';

import './Theater.scss';

const Theater = ({ selectSeat }) => {
  return (
    <div className="fade2">
      <div id="theater">
        <div className="empty-seat" onClick={selectSeat}>1</div>
        <div className="empty-seat">2</div>
        <div className="empty-seat">3</div>
        <div className="empty-seat">4</div>
        <div className="empty-seat">5</div>
        <div className="empty-seat">6</div>
        <div className="empty-seat">7</div>
        <div className="empty-seat">8</div>
        <div className="empty-seat">9</div>
        <div className="empty-seat">10</div>
        <div className="empty-seat">11</div>
        <div className="empty-seat">12</div>
        <div className="empty-seat">13</div>
        <div className="empty-seat">14</div>
        <div className="empty-seat">15</div>
        <div className="empty-seat">16</div>
        <div className="empty-seat">17</div>
        <div className="empty-seat">18</div>
        <div className="empty-seat">19</div>
        <div className="empty-seat">20</div>
      </div>
    </div>
  );
}

export default Theater;

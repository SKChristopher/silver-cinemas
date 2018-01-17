import React from 'react';

import './Trailer.scss';

const Trailer = ({ selectedMovie }) => {
  return (
    <div id="fade">
      <div id="trailer">
        <iframe className="trailer-video" src={selectedMovie[0].trailer} frameBorder="0" gesture="media" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Trailer;

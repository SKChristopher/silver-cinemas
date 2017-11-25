import React from 'react';

import './Trailer.scss';

const Trailer = ({ }) => {
  return (
    <div id="fade">
      <div id="trailer">
        <iframe className="trailer-video" src="https://www.youtube.com/embed/33iuQu3UtjI" frameborder="0" gesture="media" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Trailer;

import React from 'react';

import './Trailer.scss';

const Trailer = ({  }) => {
  return (
    <div id="fade">
      <div id="trailer">
        <iframe className="trailer-video" src="https://www.youtube.com/embed/33iuQu3UtjI" frameBorder="0" gesture="media" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Trailer;

import React from 'react';
import SVG  from 'react-inlinesvg';
import spinner from '../../assets/img/loader.svg';

import './Loader.styles.css';

const Loader = props => (
  <div className={`loader ${props.loading ? 'show' : ''}`}>
    <div className="spinner-container">
      <SVG
        src={spinner}
      />
    </div>
  </div>
);

export default Loader;
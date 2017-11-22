import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import routes from './App.routes';

const App = () => {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
};

export default App;

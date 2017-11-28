import React from 'react';

import Login from '../../containers/Login/Login';
import CreateUser from '../../containers/CreateUser/CreateUser';

const LandingPage = () => (
  <div className="landing-page">
    Landing Page
    <Login />
    <CreateUser />
  </div>
);

export default LandingPage;

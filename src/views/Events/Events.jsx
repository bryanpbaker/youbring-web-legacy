import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../../containers/AppNavbar/AppNavbar';

const Dashboard = () => (
  <div className="dashboard">
    <AppNavbar />
    Dashboard!
    <div>
      <Link to="/">Landing Page</Link>
    </div>
  </div>
);

export default Dashboard;

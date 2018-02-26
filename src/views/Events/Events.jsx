import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="dashboard">
    Dashboard!
    <div>
      <Link to="/">Landing Page</Link>
    </div>
  </div>
);

export default Dashboard;

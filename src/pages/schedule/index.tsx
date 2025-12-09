import React from 'react';
import { Navigate } from 'react-router-dom';

// Redirect to /book since all bookings now go through the unified booking page
const SchedulePage: React.FC = () => {
  return <Navigate to="/book" replace />;
};

export default SchedulePage;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userRole = localStorage.getItem('userRole'); // Assuming you store the role in local storage

  if (userRole !== 'Admin') {
    // Redirect to the desired page if the role is not admin
    return <Navigate to="/" replace />;
  }

  return children; // Render the child components if the role is admin
};

export default PrivateRoute;

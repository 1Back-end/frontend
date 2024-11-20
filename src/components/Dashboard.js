// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '250px', width: '100%' }}>
        <Navbar />
        <div className="container mt-4">
          {/* <h1>Bienvenue sur le tableau de bord</h1> */}
          {/* Ajoutez ici vos composants de contenu */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

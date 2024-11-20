import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons/css/boxicons.min.css';


const App = () => {
  return (
    <Router>
      <Routes> {/* Remplacer Switch par Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/superadmin/login" element={<Login />} />
        <Route path="/superadmin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

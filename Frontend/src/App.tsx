import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Videos from './pages/Videos';
import Membership from './pages/Membership';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
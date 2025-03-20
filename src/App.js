// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RoomListingPage from './pages/RoomListingPage';
import AllRoomPage from './pages/AllRoomPage';
import './styles/global.css';
import './styles/RoomListing.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/building/:buildingId" element={<RoomListingPage />} />
        <Route path="/rooms" element={<AllRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
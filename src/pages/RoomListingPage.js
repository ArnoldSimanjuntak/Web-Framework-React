// src/pages/RoomListingPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/global.css';

const RoomListingPage = () => {
  const { buildingId } = useParams();
  useNavigate();
  // Sample room data
  const rooms = [
    { id: '1234', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1235', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1236', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1237', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
  ];

  // State for selected room
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Room inventory data
  const roomInventory = {
    'Creative Room': {
      image: '/assets/images/Teknik Sipil.png',
      items: [
        { name: 'Meja', count: 23 },
        { name: 'Kursi', count: 23 },
        { name: 'TV', count: 1 },
        { name: 'Lemari', count: 3 },
        { name: 'Speaker', count: 1 },
      ]
    }
  };

  // Get building name from buildingId
  const getBuildingName = () => {
    switch(buildingId) {
      case '1': return 'JTE&JTA';
      case '2': return 'Gedung Sipil';
      case '3': return 'Lab Teknik';
      case '4': return 'Dekanat';
      default: return 'JTE&JTA';
    }
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="room-listing-page">
      <Header />
      
      <div className="container">
        <div className="room-listing-header">
          <h1>Daftar ruangan → {getBuildingName()}</h1>
        </div>
        
        <div className="room-listing-container">
          <div className="room-table">
            <table>
              <thead>
                <tr>
                  <th>ID Ruangan</th>
                  <th>Nama Ruangan</th>
                  <th>Status Ruangan</th>
                  <th>Gedung</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map(room => (
                  <tr 
                    key={room.id} 
                    onClick={() => handleRoomClick(room)}
                    className={selectedRoom && selectedRoom.id === room.id ? 'selected' : ''}
                  >
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td>{room.status}</td>
                    <td>{room.building}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {selectedRoom && roomInventory[selectedRoom.name] && (
            <div className="room-detail-card">
              <img 
                src={roomInventory[selectedRoom.name].image} 
                alt={selectedRoom.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/default-room.jpg';
                }}
              />
              <h2>{selectedRoom.name}</h2>
              <div className="inventory-section">
                <h3>Inventaris</h3>
                <div className="inventory-list">
                  {roomInventory[selectedRoom.name].items.map((item, index) => (
                    <div key={index} className="inventory-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-count">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                className="booking-button-room-listing"
                onClick={() => alert('Fitur peminjaman akan segera tersedia!')}
              >
                Pinjam Ruangan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomListingPage;
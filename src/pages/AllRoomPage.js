// src/pages/AllRoomsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/RoomListing.css';

const AllRoomsPage = () => {
  const navigate = useNavigate();
  
  // Sample data untuk semua ruangan dari semua gedung
  const allRooms = [
    { id: '1234', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1235', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1236', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '1237', name: 'Creative Room', status: 'Tersedia', building: 'JTE&JTA' },
    { id: '2101', name: 'Ruang Rapat', status: 'Tersedia', building: 'Gedung Sipil' },
    { id: '2102', name: 'Ruang Seminar', status: 'Tidak Tersedia', building: 'Gedung Sipil' },
    { id: '3201', name: 'Lab Komputer', status: 'Tersedia', building: 'Lab Teknik' },
    { id: '3202', name: 'Lab Fisika', status: 'Tersedia', building: 'Lab Teknik' },
    { id: '4001', name: 'Ruang Dosen', status: 'Tidak Tersedia', building: 'Dekanat' },
    { id: '4002', name: 'Ruang Meeting', status: 'Tersedia', building: 'Dekanat' },
  ];

  // State untuk selected room
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
    },
    'Ruang Rapat': {
      image: '/assets/images/Teknik Sipil.png',
      items: [
        { name: 'Meja Rapat', count: 1 },
        { name: 'Kursi', count: 12 },
        { name: 'Proyektor', count: 1 },
        { name: 'Whiteboard', count: 1 },
      ]
    },
    'Ruang Seminar': {
      image: '/assets/images/Teknik Sipil.png',
      items: [
        { name: 'Meja Pembicara', count: 1 },
        { name: 'Kursi', count: 50 },
        { name: 'Proyektor', count: 1 },
        { name: 'Sound System', count: 1 },
      ]
    },
    'Lab Komputer': {
      image: '/assets/images/LAB.png',
      items: [
        { name: 'Komputer', count: 30 },
        { name: 'Meja', count: 30 },
        { name: 'Kursi', count: 30 },
        { name: 'Proyektor', count: 1 },
      ]
    },
    'Lab Fisika': {
      image: '/assets/images/LAB.png',
      items: [
        { name: 'Meja Lab', count: 15 },
        { name: 'Kursi', count: 30 },
        { name: 'Peralatan Fisika', count: 20 },
        { name: 'Lemari Penyimpanan', count: 5 },
      ]
    },
    'Ruang Dosen': {
      image: '/assets/images/Dekanat.png',
      items: [
        { name: 'Meja', count: 10 },
        { name: 'Kursi', count: 20 },
        { name: 'Lemari', count: 5 },
        { name: 'Komputer', count: 5 },
      ]
    },
    'Ruang Meeting': {
      image: '/assets/images/Dekanat.png',
      items: [
        { name: 'Meja Konferensi', count: 1 },
        { name: 'Kursi', count: 15 },
        { name: 'Smart TV', count: 1 },
        { name: 'Whiteboard', count: 1 },
      ]
    }
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleBuildingFilter = (building) => {
    navigate(`/building/${getBuildingId(building)}`);
  };

  // Helper function untuk mendapatkan buildingId dari nama gedung
  const getBuildingId = (buildingName) => {
    switch(buildingName) {
      case 'JTE&JTA': return '1';
      case 'Gedung Sipil': return '2';
      case 'Lab Teknik': return '3';
      case 'Dekanat': return '4';
      default: return '1';
    }
  };

  return (
    <div className="room-listing-page">
      <Header />
      
      <div className="container">
        <div className="room-listing-header">
          <h1>Daftar Semua Ruangan</h1>
          <div className="filter-section">
            <select 
              className="building-filter"
              onChange={(e) => e.target.value && handleBuildingFilter(e.target.value)}
            >
              <option value="">Filter Gedung</option>
              <option value="JTE&JTA">JTE&JTA</option>
              <option value="Gedung Sipil">Gedung Sipil</option>
              <option value="Lab Teknik">Lab Teknik</option>
              <option value="Dekanat">Dekanat</option>
            </select>
          </div>
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
                {allRooms.map(room => (
                  <tr 
                    key={room.id} 
                    onClick={() => handleRoomClick(room)}
                    className={selectedRoom && selectedRoom.id === room.id ? 'selected' : ''}
                  >
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td>
                      <span className={`status-badge ${room.status === 'Tersedia' ? 'available' : 'unavailable'}`}>
                        {room.status}
                      </span>
                    </td>
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

export default AllRoomsPage;
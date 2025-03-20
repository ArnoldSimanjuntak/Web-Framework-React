// src/pages/ProfilePage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('room');

  const roomData = [
    { id: '1234', name: 'Creative Room', status: 'Selesai Digunakan', document: true },
    { id: '1234', name: 'Creative Room', status: 'Selesai Digunakan', document: true },
    { id: '1234', name: 'Creative Room', status: 'Selesai Digunakan', document: true },
  ];

  const inventoryData = [
    { id: '1236', name: 'TV', status: 'Sedang Digunakan', amount: 1, document: true },
    { id: '1232', name: 'Kursi', status: 'Selesai Digunakan', amount: 21, document: false },
    { id: '1237', name: 'Papan Tulis', status: 'Menunggu Izin', amount: 3, document: true },
  ];

  return (
    <div className="profile-page">
      <Header />
      
      <div className="profile-container">
        <div className="profile-main">
          <div className="status-section">
            <h2>Status persetujuan peminjaman <span className="green-text">Ruangan A</span></h2>
            
            <div className="progress-bar">
              <div className="progress-point active"></div>
              <div className="progress-point active"></div>
              <div className="progress-point active"></div>
              <div className="progress-point active"></div>
              <div className="progress-point active"></div>
              <div className="progress-line"></div>
            </div>
            
            <div className="progress-labels">
              <span>Diajukan</span>
              <span className="align-right">Disetujui</span>
            </div>
          </div>
          
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'room' ? 'active' : ''}`} 
              onClick={() => setActiveTab('room')}
            >
              Peminjaman Ruangan
            </button>
            <button 
              className={`tab ${activeTab === 'inventory' ? 'active' : ''}`} 
              onClick={() => setActiveTab('inventory')}
            >
              Peminjaman Inventaris
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'room' ? (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID Ruangan</th>
                    <th>Nama Ruangan</th>
                    <th>Status Ruangan</th>
                    <th>Dokumen Izin</th>
                  </tr>
                </thead>
                <tbody>
                  {roomData.map((room, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : ''}>
                      <td>{room.id}</td>
                      <td>{room.name}</td>
                      <td>{room.status}</td>
                      <td>
                        {room.document && (
                          <div className="download-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID Barang</th>
                    <th>Nama Barang</th>
                    <th>Status Barang</th>
                    <th>Jumlah Dipinjam</th>
                    <th>Dokumen Izin</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : ''}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.amount}</td>
                      <td>
                        {item.document ? (
                          <div className="download-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="7 10 12 15 17 10"></polyline>
                              <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                          </div>
                        ) : (
                          <div className="square-icon"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <div className="avatar-circle"></div>
          </div>
          <div className="profile-info">
            <h2>AYAKA SUPIT</h2>
            <p className="id-number">2202110600</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
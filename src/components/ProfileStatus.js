// src/components/ProfileStatus.js
import React from 'react';

const ProfileStatus = ({ roomName, status }) => {
  // Calculate the status progress percentage
  const getStatusProgress = () => {
    const statuses = ['Diajukan', 'Diperiksa', 'Disetujui Dosen', 'Disetujui Admin', 'Disetujui'];
    const currentIndex = statuses.indexOf(status);
    return (currentIndex / (statuses.length - 1)) * 100;
  };

  return (
    <div className="profile-status">
      <h2>Status persetujuan peminjaman {roomName}</h2>
      
      <div className="status-progress">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${getStatusProgress()}%` }}></div>
          <div className="status-points">
            <div className="point active"></div>
            <div className={`point ${status !== 'Diajukan' ? 'active' : ''}`}></div>
            <div className={`point ${['Disetujui Dosen', 'Disetujui Admin', 'Disetujui'].includes(status) ? 'active' : ''}`}></div>
            <div className={`point ${['Disetujui Admin', 'Disetujui'].includes(status) ? 'active' : ''}`}></div>
            <div className={`point ${status === 'Disetujui' ? 'active' : ''}`}></div>
          </div>
        </div>
        <div className="status-labels">
          <span>Diajukan</span>
          <span>Disetujui</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
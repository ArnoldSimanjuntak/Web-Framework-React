// src/pages/LandingPage.js
import React from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import BuildingCard from '../components/BuildingCard';
import '../styles/LandingPage.css';

const LandingPage = () => {
  // Building data
  const buildings = [
    { id: 1, name: 'JTE & JTA', image: '/assets/images/JTA JTE.png' },
    { id: 2, name: 'Gedung Sipil', image: '/assets/images/Teknik Sipil.png' },
    { id: 3, name: 'Lab Teknik', image: '/assets/images/LAB.png' },
    { id: 4, name: 'Dekanat', image: '/assets/images/Dekanat.png' },
  ];

  return (
    <div className="landing-page">
      <Header />
      
      <div className="hero-section">
        <div className="booking-form">
          <BookingForm />
        </div>
        
        <div className="hero-content">
          <h1>
            Kelola peminjaman dengan mudah - Tanpa <span className="highlight">ribet</span>, tanpa <span className="highlight">antri</span>
          </h1>
          
          <div className="cta-buttons">
            <button className="btn-learn-more">Pelajari lebih lanjut</button>
            <button className="btn-contact">Hubungi kami</button>
          </div>
        </div>
      </div>
      
      <div className="building-section">
        <h2>Gedung</h2>
        <p>hover gambar untuk melihat ketersediaan</p>
        
        <div className="building-cards">
          {buildings.map(building => (
            <BuildingCard key={building.id} name={building.name} image={building.image} />
          ))}
        </div>
      </div>
      
      <div className="availability-section">
        <div className="availability-card rooms">
          <h3>Ruangan Tersedia</h3>
        </div>
        <div className="availability-card inventory">
          <h3>Inventaris Tersedia</h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tglMulai: '',
    tglSelesai: '',
    ruangan: '',
    dosen: '',
    nim: '',
    prodi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };
  return (
    <div className="booking-form-container">
      <h2>Pinjam ruangan disini</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="namaLengkap"
          placeholder="Nama Lengkap"
          value={formData.namaLengkap}
          onChange={handleChange}
          required
        />
        
        <div className="date-inputs">
          <input
            type="date"
            name="tglMulai"
            placeholder="Tgl Mulai"
            value={formData.tglMulai}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="tglSelesai"
            placeholder="Tgl Selesai"
            value={formData.tglSelesai}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="selection-inputs">
          <select
            name="ruangan"
            value={formData.ruangan}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Ruangan</option>
            <option value="ruangan-a">Ruangan A</option>
            <option value="ruangan-b">Ruangan B</option>
            <option value="ruangan-c">Ruangan C</option>
          </select>
          
          <select
            name="dosen"
            value={formData.dosen}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Dosen</option>
            <option value="dosen-1">Dr. Adi</option>
            <option value="dosen-2">Prof. Budi</option>
            <option value="dosen-3">Dr. Citra</option>
          </select>
        </div>
        
        <div className="student-inputs">
          <input
            type="text"
            name="nim"
            placeholder="NIM"
            value={formData.nim}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="prodi"
            placeholder="Prodi"
            value={formData.prodi}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="booking-button">
          Pinjam Ruangan Sekarang
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
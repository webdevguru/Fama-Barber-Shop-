import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import HomePage from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
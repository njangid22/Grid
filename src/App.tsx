import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FruitQualityPage from './pages/FruitQualityPage';
import ExpiryDatePage from './pages/ExpiryDatePage';
import ProductDetectionPage from './pages/ProductDetectionPage';
import QuantityPage from './pages/QuantityPage';
import PredictionPage from './pages/PredictionPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/fruit-quality" element={<FruitQualityPage />} />
            <Route path="/expiry-date" element={<ExpiryDatePage />} />
            <Route path="/product-detection" element={<ProductDetectionPage />} />
            <Route path="/quantity" element={<QuantityPage />} />
            <Route path="/prediction" element={<PredictionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
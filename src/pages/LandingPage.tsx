import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Box, Scale } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold mb-8">Welcome to ByteCode</h1>
        <p className="text-xl mb-8">
          Hi, I'm Nikhil Jangid, a B.Tech CSE student at VIT AP. Our team, ByteCode, has developed this innovative web application to revolutionize product analysis.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
            <ul className="list-disc list-inside">
              <li>Fruit Quality Prediction</li>
              <li>Product Expiry Date Estimation</li>
              <li>Product Detection</li>
              <li>Quantity Measurement</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside">
              <li>Advanced AI Models</li>
              <li>User-Friendly Interface</li>
              <li>Accurate Results</li>
              <li>Time-Saving Solutions</li>
            </ul>
          </div>
        </div>
        <Link to="/login" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
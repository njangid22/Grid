import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import CameraComponent from '../components/CameraComponent';

const QuantityPage: React.FC = () => {
  const [prediction, setPrediction] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleCapture = (imageSrc: string) => {
    setCapturedImage(imageSrc);
    // Simulate prediction (replace with actual API call in a real application)
    setTimeout(() => {
      setPrediction('The estimated quantity is: 5 units');
    }, 1000);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-600 animate-fade-in">Quantity of Product</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 animate-slide-up">
        <div className="flex flex-col items-center justify-center mb-6">
          <Scale className="w-24 h-24 text-purple-500 mb-4" />
          <p className="text-gray-600 text-center text-lg">
            Use your camera to estimate the quantity of products in the image
          </p>
        </div>
        <CameraComponent onCapture={handleCapture} />
        {capturedImage && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Captured Image:</h3>
            <img src={capturedImage} alt="Captured" className="w-full rounded-lg shadow-md" />
          </div>
        )}
        {prediction && (
          <div className="mt-6 p-4 bg-purple-100 rounded-md animate-fade-in">
            <p className="text-purple-800 font-semibold text-lg">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantityPage;
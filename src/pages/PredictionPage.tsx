import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Apple, Banana, Circle } from 'lucide-react';

const PredictionPage: React.FC = () => {
  const location = useLocation();
  const { image } = location.state as { image: string };

  // Simulated prediction results
  const fruitPrediction = {
    apple: 75,
    banana: 15,
    orange: 10,
  };

  const qualityPrediction = {
    fresh: 90,
    rotten: 10,
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-600 animate-fade-in">Prediction Results</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Fruit Classification</h2>
            <div className="space-y-4">
              <PredictionBar label="Apple" percentage={fruitPrediction.apple} icon={<Apple />} color="bg-red-500" />
              <PredictionBar label="Banana" percentage={fruitPrediction.banana} icon={<Banana />} color="bg-yellow-500" />
              <PredictionBar label="Orange" percentage={fruitPrediction.orange} icon={<Circle className="text-orange-500" />} color="bg-orange-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Quality Classification</h2>
            <div className="space-y-4">
              <PredictionBar label="Fresh" percentage={qualityPrediction.fresh} color="bg-green-500" />
              <PredictionBar label="Rotten" percentage={qualityPrediction.rotten} color="bg-gray-500" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Uploaded Image</h2>
            <img src={image} alt="Uploaded fruit" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

const PredictionBar: React.FC<{ label: string; percentage: number; icon?: React.ReactNode; color: string }> = ({ label, percentage, icon, color }) => (
  <div>
    <div className="flex items-center mb-1">
      {icon && <span className="mr-2">{icon}</span>}
      <span className="font-medium">{label}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-500">{percentage}%</span>
  </div>
);

export default PredictionPage;
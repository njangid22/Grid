import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Box, Scale } from 'lucide-react';

const HomePage: React.FC = () => {
  const cards = [
    { title: 'Fruit Quality Detection', icon: Camera, link: '/fruit-quality', color: 'bg-orange-500' },
    { title: 'Find Expiry Date', icon: Calendar, link: '/expiry-date', color: 'bg-green-500' },
    { title: 'Product Detection', icon: Box, link: '/product-detection', color: 'bg-blue-500' },
    { title: 'Quantity of Product', icon: Scale, link: '/quantity', color: 'bg-purple-500' },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in">Welcome to ByteCode AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Link key={index} to={card.link} className="block animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <div className={`${card.color} rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}>
              <card.icon className="w-16 h-16 mb-4 text-white mx-auto" />
              <h2 className="text-xl font-semibold text-center text-white">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
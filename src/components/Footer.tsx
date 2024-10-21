import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingCart className="mr-2" />
          <span className="font-bold">ByteCode</span>
        </div>
        <div>© 2024 ByteCode. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
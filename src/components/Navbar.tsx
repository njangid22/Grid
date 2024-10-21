import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <ShoppingCart className="mr-2" />
          ByteCode
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link to="/home" className="mr-4">Home</Link>
              <button onClick={() => setIsLoggedIn(false)} className="bg-white text-blue-500 px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-white text-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
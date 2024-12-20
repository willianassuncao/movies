import { FC, useState } from 'react';
import Link from 'next/link';

const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Menu</div>

      <div className="hidden md:flex space-x-4">
        <Link href="#" className="hover:underline">
          Home
        </Link>
        <Link href="#" className="hover:underline">
          About
        </Link>
        <Link href="#" className="hover:underline">
          Services
        </Link>
        <Link href="#" className="hover:underline">
          Contact
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="block md:hidden focus:outline-none"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            &times;
          </button>
          <Link href="#" className="text-2xl hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#" className="text-2xl hover:underline" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#" className="text-2xl hover:underline" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#" className="text-2xl hover:underline" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

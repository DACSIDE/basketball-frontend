import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold">Dac Blog</a>
        <div>
          <a href="/about" className="text-white mr-4">About</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';




export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = ['Category 1', 'Category 2', 'Category 3']; // Add your categories here

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Sportify Store</div>
            <ul className="flex space-x-4">
              <a className="hover:text-gray-300" href='/'>Home</a>
              <li className="relative">
                <button
                  className="hover:text-gray-300 focus:outline-none"
                  onClick={toggleDropdown}
                  aria-haspopup="true"
                  aria-expanded={showDropdown}
                >
                  Shop
                </button>
                {showDropdown && (
                  <ul className="absolute top-full left-0 bg-black shadow-lg rounded-md py-2 mt-1">
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-300"
                      >
                        <a href={'/c'} className="block">
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="hover:text-gray-300">About</li>
              <li className="hover:text-gray-300">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

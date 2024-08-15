import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex h-full">
        <div
          className={`bg-gradient-to-b from-orange-800 to-green-600 text-white w-64 py-7 px-4 fixed inset-y-0 left-0 transform transition-transform duration-700 ease-in-out md:relative md:translate-x-0 overflow-y-auto shadow-lg perspective-500`}
          style={{ maxHeight: '100vh' }}
        >
          <nav
            className={`${isScrolled ? 'block' : 'hidden'} md:block transform rotate-y-10 transition-all duration-700`}
          >
            <Link
              to="/draggable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Draggable
            </Link>
            <Link
              to="/resizable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Resizable
            </Link>
            <Link
              to="/scalable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Scalable
            </Link>
            <Link
              to="/rotatable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Rotatable
            </Link>
            <Link
              to="/warpable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Warpable
            </Link>
            <Link
              to="/clippable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Clippable
            </Link>
            <Link
              to="/roundable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Roundable
            </Link>
            <Link
              to="/origin-draggable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Origin Draggable
            </Link>
            <Link
              to="/pinchable"
              className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md hover:transform hover:rotate-x-6 hover:translate-z-2"
            >
              Pinchable
            </Link>
            <div className="relative">
              <button
                className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-orange-700 hover:shadow-md w-full text-left hover:transform hover:rotate-x-6 hover:translate-z-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Able Combination
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-full bg-gradient-to-r from-orange-900 to-green-700 text-white rounded-lg shadow-lg z-10">
                  <Link
                    to="/DRR"
                    className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-green-800 hover:transform hover:rotate-x-6 hover:translate-z-2"
                  >
                    Draggable & Resizable & Rotatable
                  </Link>
                  <Link
                    to="/DSR"
                    className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-green-800 hover:transform hover:rotate-x-6 hover:translate-z-2"
                  >
                    Draggable & Scalable & Rotatable
                  </Link>
                  <Link
                    to="/DODR"
                    className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-green-800 hover:transform hover:rotate-x-6 hover:translate-z-2"
                  >
                    Draggable & Origin Draggable & Rotatable
                  </Link>
                  <Link
                    to="/All-In-One"
                    className="block py-3 px-5 rounded-lg transition-all duration-200 hover:bg-green-800 hover:transform hover:rotate-x-6 hover:translate-z-2"
                  >
                    All In One
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      <hr className="border-t-2 border-white mt-4" />
    </>
  );
};

export default Sidebar;
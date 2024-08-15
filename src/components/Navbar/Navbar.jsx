import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [bgColor, setBgColor] = useState('bg-orange-600');

  useEffect(() => {
    const colors = ['bg-orange-600', 'bg-green-600'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBgColor(colors[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className={`${bgColor} p-4 shadow-md transition-colors duration-1000`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold font-poppins tracking-wide">Moveable</div>
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full" />
                <h2 className="text-white">{user.name}</h2>
              </div>
            )}
            {isAuthenticated ? (
              <button
                className="bg-white text-orange-600 px-5 py-2 rounded-lg hover:bg-orange-100 transition-all duration-300 shadow-sm"
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-white text-orange-600 px-5 py-2 rounded-lg hover:bg-orange-100 transition-all duration-300 shadow-sm"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <hr className="border-t-2 border-white" />
    </>
  );
};

export default Navbar;
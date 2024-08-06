import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-2 text-white">🚘 CarKhabree</h1>
        <div className="mb-4">
          <a href="/" className="text-gray-400 hover:text-white mx-2">Home</a>
          <a href="pages/CrashTestRatingsPage.jsx" className="text-gray-400 hover:text-white mx-2">Safety Info</a>
        </div>
        <p className="text-sm mb-2 text-gray-400">
          Looks like you’ve hit the end of the road, but don’t worry! Keep cruising with us for more car craziness. 🚗💨
        </p>
        <p className="text-xs text-gray-500">
          Khabree will clutch all the way to keep you Updated ! 
        </p>
      </div>
    </footer>
  );
};

export default Footer;

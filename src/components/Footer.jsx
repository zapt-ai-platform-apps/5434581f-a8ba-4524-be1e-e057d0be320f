import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-1 text-white">Mr Expert</h3>
            <p className="text-gray-300 text-sm mb-0">Your guide to online earning opportunities</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              Made on ZAPT
            </a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Use</a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mr Expert. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
import React from 'react';

export default function Header({ toggleSidebar }) {
  return (
    <header className="fixed w-full bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-3 p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer md:hidden"
            aria-label="Toggle sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="Mr Expert Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-xl font-bold text-gray-900 mb-0">Mr Expert</h1>
          </div>
        </div>
        <div>
          <span className="hidden sm:inline-block text-blue-600 font-semibold">Online Earning Guide</span>
        </div>
      </div>
    </header>
  );
}
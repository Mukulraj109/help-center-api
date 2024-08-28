import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => (
  <div className="bg-purple-100 py-16 flex justify-center items-center flex-col">
    <h1 className="text-6xl font-semibold mb-8">How can we help?</h1>
    <div className="relative max-w-lg w-full">
      <input
        type="text"
        className="w-full px-6 py-4 text-lg border border-gray-300  focus:outline-none shadow-lg"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute right-3 top-2/4 transform -translate-y-2/4 px-4 py-2 bg-white rounded-full focus:outline-none">
        →
      </button>
    </div>
  </div>
);

export default Header;

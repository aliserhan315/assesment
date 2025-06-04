'use client';

import React from 'react';

function SearchBox({ searchText, setSearchText }) {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
    </div>
    //i used my search box that i used in my monster project before with some edits 
  );
}

export default SearchBox;

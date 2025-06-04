import React, { useState } from 'react';

const highlightsmatch = (text, search) => {
  if (!search) return text;
  const parts = text.split(new RegExp(`(${search})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span key={i} className="bg-yellow-300">{part}</span>
    ) : (
      part
    )
  );
};

function SearchBox() {
  const [searchText, setSearchText] = useState("");

  const textToHighlight = "This is a sample text to highlight the search functionality.";

  return (
    <div className="max-w-xl mx-auto mt-10">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <p className="mt-4 text-lg">
        {highlightsmatch(textToHighlight, searchText)}
      </p>
    </div>
  );
}

export default SearchBox;
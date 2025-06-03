import React from 'react'
import { useState } from 'react'
const highlightsmatch =(text, search) => {
  if (!search) return text;
  const parts = text.split(new RegExp(`(${search})`, 'gi'));
  return parts.map((part, i) => part.toLowerCase() === search.toLowerCase() ?
    <span key={i} className="bg-yellow-300">{part}</span> : part);

    
}
function searchbox() {
  return (
    <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const searchText = e.target.value;
            const textToHighlight = "This is a sample text to highlight the search functionality.";
            const highlightedText = highlightsmatch(textToHighlight, searchText);
            console.log(highlightedText);
          }}/>
        <p className="mt-4"></p>



    </div>
  )
}

export default searchbox
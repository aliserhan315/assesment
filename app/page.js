'use client';

import React, { useState } from 'react';
import SearchBox from '@/components/searchbox';

const articles = [
  {
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns.",
  },
];

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

function Page() {
  const [searchText, setSearchText] = useState("");

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchText.toLowerCase()) ||
    article.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">Text Search Project</h1>

      <SearchBox searchText={searchText} setSearchText={setSearchText} />

      <div className="max-w-2xl mx-auto mt-10">
        {filteredArticles.map((article, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{highlightsmatch(article.title, searchText)}</h2>
            <p className="text-gray-500 text-sm mb-2">{article.date}</p>
            <p>{highlightsmatch(article.content, searchText)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;

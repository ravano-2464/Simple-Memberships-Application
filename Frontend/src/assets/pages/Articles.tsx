import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/membership/articles');
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;

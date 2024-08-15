import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/api/membership/videos');
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index} className="mb-4">{video}</li>
        ))}
      </ul>
    </div>
  );
};

export default Videos;
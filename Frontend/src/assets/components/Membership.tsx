import React from 'react';

const Membership = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tipe A</h2>
          <p>Akses 3 artikel dan 3 video</p>
        </div>
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tipe B</h2>
          <p>Akses 10 artikel dan 10 video</p>
        </div>
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Tipe C</h2>
          <p>Akses semua artikel dan video</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
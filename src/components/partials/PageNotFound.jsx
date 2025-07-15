import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className="container mx-auto p-10 text-center mt-60 bg-blue-100 ">
        <div className="bg-blue-50 shadow-2xl p-10">
          <p className="text-7xl mb-5">⚠️</p>
          <h1 className="text-blue-700 font-bold text-6xl ">
            4<span className="text-orange-700">0</span>4 - Page Not Found
          </h1>
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 inline-block mt-14 "
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;

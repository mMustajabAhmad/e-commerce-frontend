import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover amazing products and enjoy a seamless shopping experience.
        </p>
        <div className="mt-8">
          <a
            // href="/shop"
            href = "/signin"
            className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
}

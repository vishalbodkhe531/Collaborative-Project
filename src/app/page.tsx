"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Shoes", price: 1299, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Watch", price: 1999, image: "https://via.placeholder.com/200" },
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex items-center space-x-2 text-lg">
          🛒 <span>{cart.length}</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold">Welcome to MyShop</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Find the best products at unbeatable prices!
        </p>
        <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Products */}
      <main className="flex-1">
        <h3 className="text-2xl font-bold text-center mt-10 mb-6">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-40 object-cover mt-2"
              />
              <p className="text-gray-700 font-medium mt-2">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </footer>
    </div>
  );
}

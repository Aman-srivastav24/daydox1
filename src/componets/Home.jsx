// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import ContactForm from './ContactForm';
import Work from './Work';
import backgroundImage from '../assets/background.jpg'; // Import the background image

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Web Agency</h1>
          <p className="text-lg mb-8">
            We create beautiful and functional websites to help your business grow.
          </p>
          <Link to="/services">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full md:w-[30%] transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <Services />
      <Work />
      <ContactForm />
    </div>
  );
};

export default Home;

// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import ContactForm from './ContactForm';
import Work from './Work';

const Home = () => {
  return (
    <div >
      <section className="bg-gray-200 h-[60vh] py-20 bg-[url('/home/amansrivastav/Desktop/daydox1/src/assets/background1.jpg')] bg-cover bg-no-repeat bg-center mt-4 rounded-lg  flex items-center ">
        <div className="container mx-auto text-white  text-center p-8 backdrop-blur-[1px] bg-black/10 w-[400px] md:w-[80%] rounded-lg " >
          <h1 className="text-4xl  font-bold mb-2 lg:text-6xl">Welcome to DayDox</h1>
          <p className="text-[20px] md:text-[24px] mb-6 font-bold text-gray-200 font-mono  Doodle Shadow rounded-lg p-4">
          Seamless Websites, Stronger Businesses – Let's Build Yours.
          </p>
          <Link to="/services">
            <button className="bg-green-500 text-white py-2 px-4 rounded-full md:w-[30%] transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <Services />
      <Work/>
      <ContactForm />
    </div>
  );
};

export default Home;

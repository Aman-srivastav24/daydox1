// src/components/Work.js
import React from 'react';
import dotmedia from '../assets/dotmedia.png'
import upinthesky from '../assets/upinthesky.png'
import clean from '../assets/clean.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Testmonial from './Testmonial';
const Work = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8  text-green-500
        bg-gradient-to-r from-yellow-200 to-purple-200 rounded-md p-2">Our Work</h2>
        <div className="grid  md:grid-cols-3 gap-8 place-content-center">
          {/* Add individual work items */}
          <div class="relative h-[350px] w-[280px] rounded-md hover:scale-110 transtiton duration-300 ease-in-out transform ">
  <img
    src={dotmedia}
    alt="AirMax Pro"
    class="z-0 h-full w-full  object-cover shadow-2xl"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent "></div>
  <div class="absolute bottom-4 left-4 text-left p-2 backdrop-blur-[1px] bg-black/10 ">
    <h1 class="text-lg font-semibold text-white">DotMedia</h1>
    <p class="mt-2 text-sm text-gray-300">
    Dot Media is a dynamic social platform for personalized, secure, and creative content sharing and seamless collaboration.
    </p>
    <button class="mt-2 flex cursor-pointer items-center text-sm font-semibold text-gray-700 hover:scale-105 transition duration-500 ease-in-out transform bg-white w-[120px] rounded-md px-2 hover:text-gray-900">
    <Link to="https://vivacious-gold-headscarf.cyclic.app/signin" target="_blank" className='flex' >View Website<CiSearch/></Link>
      
    </button>
  </div>
</div> 

<div class="relative h-[350px] w-[280px] rounded-md hover:scale-110 transtiton duration-300 ease-in-out transform">
  <img
    src={upinthesky}
    alt="AirMax Pro"
    class="z-0 h-full w-full  shadow-2xl "
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left p-2 backdrop-blur-[1px] bg-black/10">
    <h1 class="text-lg font-semibold text-white">Up in the Sky</h1>
    <p class="mt-2 text-sm text-gray-300">
    UpInTheSky is an immersive travel Web Application, providing personalized itineraries and a creative community for and unforgettable journeys
    </p>
    <button class="mt-2 flex cursor-pointer items-center text-sm font-semibold text-gray-700 hover:scale-105 transition duration-500 ease-in-out transform bg-white w-[120px] rounded-md px-2 hover:text-gray-900">
    <Link to="https://upinthesky.vercel.app" target="_blank" className='flex' >View Website<CiSearch/></Link>
      
    </button>
  </div>
</div>

<div class="relative h-[350px] w-[280px] rounded-md hover:scale-105 transtiton duration-300 ease-in-out transform">
  <img
    src={clean}
    alt="AirMax Pro"
    class="z-0 h-full w-full  object-cover shadow-2xl"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent "></div>
  <div class="absolute bottom-4 left-4 text-left p-2 backdrop-blur-[1px] bg-black/10">
    <h1 class="text-lg font-semibold text-white">Clean Cruisers</h1>
    <p class="mt-2 text-sm text-gray-300">
    CleanCruisers is website which provide users car washing service at affordable price. Personalized, secure, and superior services ensuring a  smooth ride.
    </p>
    <button class="mt-2 flex cursor-pointer items-center text-sm font-semibold text-gray-700 hover:scale-105 transition duration-500 ease-in-out transform bg-white w-[120px] rounded-md px-2 hover:text-gray-900">
    <Link to="https://cleancruisers.in/" target="_blank" className='flex' >View Website<CiSearch/></Link>
      
    </button>
  </div>
</div>

        </div>
      </div>
      
    </section>
  );
};

export default Work;

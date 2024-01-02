// src/components/Services.js
import React from 'react';
import webDesign from '../assets/landing-page.png'
import dev from '../assets/app-development.png'
import seo from '../assets/web-programming.png'
const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add individual service items */}
          <div class="md:w-[300px] w-[100%] flex md:flex-col rounded-md border items-center bg-green-200 text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105">
  <img
    src={webDesign}
    alt="Laptop"
    class="md:h-[200px] md:w-[200px] rounded-md h-[140px] w-[140px] object-cover p-4"
  />
  <div class="p-4 w-[90%]">
    <h1 class="text-lg font-semibold">Web Design</h1>
    <p class="mt-3 text-[18px]  text-gray-600">
    Beautiful and responsive web design tailored to your business needs.
    </p>
  
  </div>
</div>
          <div class="md:w-[300px] w-auto flex flex-row-reverse md:flex-col rounded-md border bg-green-200  items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-300 to-green-500 hover:scale-105">
  <img
    src={dev}
    alt="Laptop"
    class="md:h-[200px] md:w-[200px] rounded-md h-[140px] w-[140px] object-cover p-4 "
  />
  <div class="p-4 w-[90%]">
    <h1 class="text-lg font-semibold">Development</h1>
    <p class="mt-3 text-[18px] text-gray-600">
    Custom web development using the latest technologies and frameworks.
    </p>
  
  </div>
</div>
<div class="md:w-[300px] w-[100%] flex md:flex-col rounded-md border items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 bg-green-200 ">
  <img
    src={seo}
    alt="Laptop"
    class="md:h-[200px] md:w-[200px] rounded-md h-[140px] w-[140px] object-cover p-4"
  />
  <div class="p-4 w-[90%]">
    <h1 class="text-lg font-semibold">SEO Optimization</h1>
    <p class="mt-3 text-[18px] text-gray-600">
    Improve your website's visibility on search engines and attract more visitors.
    </p>
  
  </div>
</div>

         
         
       
        </div>
      </div>
    </section>
  );
};

export default Services;

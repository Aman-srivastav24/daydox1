// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add individual service items */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p>Beautiful and responsive web design tailored to your business needs.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Development</h3>
            <p>Custom web development using the latest technologies and frameworks.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
            <p>Improve your website's visibility on search engines and attract more visitors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

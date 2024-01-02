// src/components/Work.js
import React from 'react';

const Work = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add individual work items */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p>Description of Project 1.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p>Description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

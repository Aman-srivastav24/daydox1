// src/components/Services.js
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import webDesign from '../assets/landing-page.png'
import dev from '../assets/app-development.png'
import seo from '../assets/web-programming.png'
import { Link } from 'react-router-dom';


const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <section className="bg-white py-16 " >
      <div className="container mx-auto " >
        <h2 className="text-3xl font-bold mb-8 
        text-green-500
        bg-gradient-to-r from-yellow-200 to-purple-200 rounded-md p-2 " >What We Provide</h2>

        <motion.div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 " ref={ref} 
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .75, delay: .25 }}
        >
          {/* Add individual service items */}

          <Link to="/contact">
            <motion.div className="md:w-[300px] w-[100%] flex md:flex-col rounded-md border items-center bg-green-200 text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 shadow-2xl">
              <img
                src={webDesign}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-md h-[120px] w-[120px] object-cover p-4"
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Web Design</h1>
                <p class="mt-3 md:text-[18px] text-sm  text-gray-600">
                  Beautiful and responsive web design tailored to your business needs.
                </p>

              </div>
            </motion.div>
          </Link>

          <Link to="/contact">
            <div class="md:w-[300px] w-auto flex flex-row-reverse md:flex-col rounded-md border bg-green-200  items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-300 to-green-500 hover:scale-105 shadow-2xl">
              <img
                src={dev}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-md h-[120px] w-[120px] object-cover p-4 "
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Development</h1>
                <p class="mt-3 md:text-[18px] text-sm text-gray-600">
                  Custom web development using the latest technologies and frameworks.
                </p>

              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div class="md:w-[300px] w-[100%] flex md:flex-col rounded-md border items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 bg-green-200 shadow-2xl ">
              <img
                src={seo}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-md h-[120px] w-[120px] object-cover p-4"
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">SEO Optimization</h1>
                <p class="mt-3 md:text-[18px] text-sm text-gray-600">
                  Improve your website's visibility on search engines and attract more visitors.
                </p>

              </div>
            </div>
          </Link>




        </motion.div>
      </div>

    </section>

  );
};

export default Services;

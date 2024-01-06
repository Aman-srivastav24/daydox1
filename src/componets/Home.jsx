// src/components/Home.js
import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useSpring, animated, config } from 'react-spring';
import Services from './Services';
import ContactForm from './ContactForm';
import Work from './Work';
import Testmonial from './Testmonial';

const textItems = [
  'Seamless Websites',
  'Impressive Design',
  'Budget Friendly',
];
const Home = () => {
  const [index, setIndex] = useState(0);

  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
    onRest: () => {
      // Increase the index after the animation completes
      setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    },
    config: config.molasses, 
  });
  useEffect(() => {

    const loopInterval = setInterval(() => {
      textAnimation.reset();
    }, 5000); 
    return () => clearInterval(loopInterval);
  }, [textAnimation]);
  return (
    <div >
      <section className="bg-gray-200 h-[50vh] bg-hero-pattern bg-cover bg-no-repeat bg-center mt-4 rounded-lg  flex-col items-center md:h-[60vh]">
        <div className="container mx-auto text-white  text-center p-8 backdrop-blur-[1px] bg-black/10 w-auto md:w-[80%] rounded-lg mt-10 " >
          <h1 className="text-3xl   font-bold mb-2 lg:text-6xl">&lt; Welcome to DayDox /&gt;</h1>
          <p className="text-[24px] md:text-[30px] mb-6 font-bold text-gray-200  font-mono  text-slide-container Shadow rounded-lg p-4">
          <animated.div style={textAnimation}>{textItems[index]}</animated.div>
          </p>

          <Link to="/services">
            <button className="bg-gray-300 text-black py-2 px-4 rounded-full md:w-[30%] transition duration-300 ease-in-out transform hover:scale-105">
              Let's Build Yours
            </button>
          </Link>

        </div>

      </section>


      <div class="rounded-md border-l-4 border-green-500  p-4 mt-10 mx-6 w-auto h-auto  hover:shadow-2xl transition duration-300 ease-in-out transform  bg-gradient-to-r from-yellow-200 to-purple-200  ">
        <div class="flex items-center justify-between space-x-4 mx-auto rounded-md shadow-xl">
          <div>

          </div>
          <div>
            <p class="text-[12px] md:text-[16px]  font-bold font-semibold text-green-600">
              <p class='text-[20px] text-black font-bold inline'>We Are Daydox </p> Crafting bespoke websites for all budgets! Elevate your online presence with our custom solutions, blending user-friendly design, cutting-edge frameworks, and SEO expertise. From basic sites to tailored experiences, Daydox ensures affordability without compromising quality. Let's transform your digital landscape together!
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>

      <Services />
      <Work />
      <Testmonial />
      <ContactForm />
    </div>
  );
};

export default Home;

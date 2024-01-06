import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the visibility state
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 100); // Adjust the threshold as needed
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-green-400 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 z-[1]"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      )}
    </>
  );
};

export default BackToTop;

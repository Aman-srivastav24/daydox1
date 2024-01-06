
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Adjust the scroll duration as needed
      smooth: 'easeInOutQuad', // Use a smooth easing function
    });
  };

  return (
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </div>
  );
};

export default BackToTop;

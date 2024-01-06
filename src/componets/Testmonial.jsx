import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import aditya from '../assets/aditya.jpg'
function Testmonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])
  return (
    <>
      <section class=" py-16  ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 mx-4 text-green-500
        bg-gradient-to-r from-yellow-200 to-purple-200 rounded-md p-2">Client Feedback</h2>
          <div class="mx-auto max-w-4xl"
          >
            <motion.div class="flexcol md:flex items-center justify-center md:space-x-14 m-4"
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: .75, delay: 0.25 }}

             >
              <div class="relative flex w-auto items-center justify-center flex-shrink-0">
                <img
                  class="relative h-48 w-48 rounded-full object-cover"
                  src={aditya}
                  alt="client img"
                />
              </div>
              <div class="mt-10 md:mt-0">
                <blockquote>
                  <p class="text-xl text-black"
                  >
                    “Clean Cruisers' website by Daydox is simply fantastic! Their straightforward design, secure features, and user-friendly approach have transformed our online presence. Thank you for a job well done!”
                  </p>
                </blockquote>
                <p class="mt-7 text-lg font-semibold text-black">Aditya Ray</p>
                <p class="mt-1 text-base text-gray-600">Owner : Clean Cruisers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section >

   </>
  )
}

export default Testmonial
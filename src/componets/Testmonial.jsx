import React from 'react'
import aditya from '../assets/aditya.jpg'
function Testmonial() {
  return (
   <>
   <section class="px-2 py-16 mx-0.5 md:mx-7 ">
   <h2 className="text-3xl font-bold mb-8 mx-4 text-green-500
        bg-gradient-to-r from-yellow-200 to-purple-200 rounded-md p-2">Client Feedback</h2>
  <div class="mx-auto max-w-4xl">
    <div class="flexcol md:flex items-center justify-center md:space-x-14 m-4">
      <div class="relative flex w-auto items-center justify-center flex-shrink-0">
        <img
          class="relative h-48 w-48 rounded-full object-cover"
          src={aditya}
          alt="client img"
        />
      </div>
      <div class="mt-10 md:mt-0">
        <blockquote>
          <p class="text-xl text-black">
            “Clean Cruisers' website by Daydox is simply fantastic! Their straightforward design, secure features, and user-friendly approach have transformed our online presence. Thank you for a job well done!”
          </p>
        </blockquote>
        <p class="mt-7 text-lg font-semibold text-black">Aditya Ray</p>
        <p class="mt-1 text-base text-gray-600">Owner : Clean Cruisers</p>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Testmonial
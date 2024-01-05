// src/components/ContactForm.js
import React from 'react';
import Testmonial from './Testmonial';

const ContactForm = () => {
  return (
    <section className="bg-gray-100 ">


      <div class="mx-auto max-w-7xl py-12 md:py-24">
        <div class="grid items-center justify-items-center  lg:grid-cols-2">
          <div class="flex items-center justify-center">
            <div class="px-2 md:px-12">
              <p class="text-2xl font-bold text-gray-900 md:text-4xl">
                Get in touch
              </p>
              <p class="mt-4 text-lg text-gray-600">
                Our friendly team would love to hear from you.
              </p>
              <form action="https://api.web3forms.com/submit" method="POST" class="mt-8 space-y-4">
                <input type="hidden" name="access_key" value="ad157cd5-dae3-4972-be01-1d2e8851a698" />
                <div class="grid w-full  items-center gap-1.5">
                <label
                  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="first_name"
                >
                  Name
                </label>
                <input class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"

                  placeholder="ex : John Doe" type="text" name="name" required />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                <label
                  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"

                  id="email"
                  placeholder="Email" type="email" name="email" required />
                  </div>
                  <div class="grid w-full  items-center gap-1.5">
                <label
                  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="phone_number"
                >
                  Phone number (Add Country Code)
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text" name="Phone Number" required
                  id="phone_number"
                  placeholder="+91 1234567890 "
                />
                </div>
                <div class="grid w-full  items-center gap-1.5">
                <label
                  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="message"
                >
                  Message
                </label>
                <textarea class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 
                text-black
                dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  cols="3" name="message" required></textarea>
                  </div>
                <div class="h-captcha" data-captcha="true"></div>
                <button
                  type="submit"
                  class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>

              </form>
              <script src="https://web3forms.com/client/script.js" async defer></script>
            </div>
          </div>
          <img
            alt="Contact us"
            class="hidden h-[300px] w-[300px] shadow-2xl rounded-lg object-cover lg:block"
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=687&amp;h=800&amp;q=80"
          />
        </div>
      </div>

      

    </section>
  );
};

export default ContactForm;


{/* <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
<div class="grid w-full  items-center gap-1.5">
  <label
    class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="first_name"
  >
    First Name
  </label>
  <input
    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
    type="text"
    id="first_name"
    placeholder="First Name"
  />
</div>
<div class="grid w-full  items-center gap-1.5">
  <label
    class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="last_name"
  >
    Last Name
  </label>
  <input
    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
    type="text"
    id="last_name"
    placeholder="Last Name"
  />
</div>
</div>
<div class="grid w-full  items-center gap-1.5">
<label
  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  for="email"
>
  Email
</label>
<input
  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
  type="text"
  id="email"
  placeholder="Email"
/>
</div>
<div class="grid w-full  items-center gap-1.5">
<label
  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  for="phone_number"
>
  Phone number
</label>
<input
  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
  type="tel"
  id="phone_number"
  placeholder="Phone number"
/>
</div>
<div class="grid w-full  items-center gap-1.5">
<label
  class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  for="message"
>
  Message
</label>
<textarea
  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
  id="message"
  placeholder="Leave us a message"
  cols="3"
></textarea>
</div> */}
import React from "react";
import go1 from "./../assets/Images/go1.jpg";
import go2 from "./../assets/Images/go2.jpg";
import go3 from "./../assets/Images/go3.jpg";
import go4 from "./../assets/Images/go4.jpg";
import go5 from "./../assets/Images/go5.jpg";

const GymOverview = () => {
  return (
    <div className="container mx-auto">
         <h1 class="bg-blue-100 my-8 w-fit px-6 py-4 text-center mx-auto text-blue-800 text-2xl font-medium rounded dark:bg-blue-900 dark:text-blue-300">Gallery</h1>
      <div id="gallery" class="relative w-full" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={go1}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={go2}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={go3}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={go4}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={go5}
              class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        </div>

        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default GymOverview;

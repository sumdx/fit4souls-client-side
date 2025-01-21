import React from "react";

const TestimonialCard = ({ review }) => {
  const star = [];
  for (let i = 0; i < review.rate; i++) {
    star.push(
      <svg
        class="w-5 h-5 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between p-6 rounded-lg ">
      <figure className="text-center flex flex-col h-full">
        <div class="flex items-center mb-4 text-yellow-300 justify-center">
          {star}
        </div>
        <div>
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
        <div>
        <blockquote className="o">
          <p class="text-2xl  italic font-medium text-gray-900 dark:text-white">
            "{review.reviewText}"
          </p>
        </blockquote>
        </div>

        
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            class="w-6 h-6 rounded-full"
            src={review.user.photoURL}
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900 dark:text-white">
              {review.user.name}
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useAllReviews from "../Hooks/useAllReviews";
const Testimonial = () => {
  const [reviewData] = useAllReviews();

  return (
    <div className="max-w-screen-xl mx-auto mt-40">
      <div>
      <h1 class="bg-blue-100 my-8 w-fit px-6 py-4 text-center mx-auto text-blue-800 text-2xl font-medium rounded dark:bg-blue-900 dark:text-blue-300">Our Happy clients</h1>
      </div>
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}

        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviewData?.map((review,index) => {
          return (
            <SwiperSlide>
            <TestimonialCard key={index} review={review} ></TestimonialCard>
          </SwiperSlide>
          )
          
        })}
        
      </Swiper>
    </div>
  );
};

export default Testimonial;

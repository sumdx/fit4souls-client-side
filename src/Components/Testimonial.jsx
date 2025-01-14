import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        spaceBetween={50}
        
        autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        onSlideChange={() => console.log("slide change")}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            640: {
                slidesPerView: 1,
            },
            768: {
        
                slidesPerView: 2,
            },
            1024 : {
                slidesPerView :3,
            }
        }}
      >
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;

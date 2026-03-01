import React from "react";
import Container from "../commonUi/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation"; // Required for arrows to appear

import Images from "../commonUi/Images";
import { reviews } from "../../data/data"; // Adjust path if needed (e.g. ../data/reviews)
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Review = () => {
  return (
    <div
      className="bg-[url('/src/assets/reviewBG.png')] bg-no-repeat bg-center bg-cover py-16 md:py-20 lg:py-24 mb-16 md:mb-20 lg:mb-24 relative"
    >
      <Container>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          className="review-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
                <Images
                  imgSrc={review.image}
                  className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto mx-auto rounded-full object-cover border-4 border-gray-700/30 shadow-lg"
                />

                <p className="text-[#bbbbbb] text-base sm:text-lg md:text-xl italic leading-7 sm:leading-8 md:leading-9 pt-6 sm:pt-8 pb-4 sm:pb-6 max-w-3xl mx-auto">
                  "{review.text}"
                </p>

                <h5 className="text-[#e0e0e0] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                  {review.name}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows – positioned outside / over the slider */}
        <button
          className="custom-swiper-prev absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-[#FFAE00] text-4xl sm:text-5xl cursor-pointer transition-colors duration-300"
          aria-label="Previous review"
        >
          <CircleChevronLeft
            size={45}
            strokeWidth={1.2}
            absoluteStrokeWidth
          />
        </button>

        <button
          className="custom-swiper-next absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-[#FFAE00] text-4xl sm:text-5xl cursor-pointer transition-colors duration-300"
          aria-label="Next review"
        >
          <CircleChevronRight size={45} strokeWidth={1.2} absoluteStrokeWidth />
        </button>
      </Container>
    </div>
  );
};

export default Review;
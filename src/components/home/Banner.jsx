import { Swiper, SwiperSlide } from "swiper/react";

import { bannerSlides } from "/src/data/data"; // তোমার path অনুযায়ী চেঞ্জ করো

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Container from "/src/components/commonUi/Container";
import Images from "/src/components/commonUi/Images";
import Button from "/src/components/commonUi/Button";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";


const Banner = () => {
  return (
    <div className="bg-[#f5f6f1]">
      <Swiper
        modules={[Autoplay, Navigation]} // Pagination রিমুভ করা আছে যেহেতু dots চাও না
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next", // custom class দাও
          prevEl: ".custom-swiper-button-prev",
        }}
        className="mySwiper relative"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Container>
              <div className="flex items-center justify-around py-20 md:py-32 lg:py-40">
                <div className="w-full md:w-1/3">
                  <Images
                    imgSrc={slide.img}
                    className="w-full object-cover"
                    imgAlt={`Banner ${index + 1}`}
                  />
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                  <h4 className="text-[#282828] text-lg font-Roboto font-medium uppercase">
                    {slide.subtitle}
                  </h4>
                  <h1 className="text-[#282828] text-4xl md:text-[50px] font-Roboto font-bold uppercase leading-tight md:leading-13.75 py-3 md:py-3.75">
                    {slide.title}
                  </h1>
                  <p className="text-[#282828] text-base font-Roboto leading-7 max-w-125 pb-6 md:pb-7.5">
                    {slide.desc}
                  </p>
                  <Link to="/shop">
                    <Button btnTxt="Buy Now" />
                  </Link>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-button-prev absolute top-1/2 left-10 z-10 -translate-y-1/2 cursor-pointer text-[#282828] hover:text-[#FFAE00] transition-colors">
          <CircleChevronLeft
            size={45}
            strokeWidth={1.2}
            absoluteStrokeWidth
          />{" "}
        </div>
        <div className="custom-swiper-button-next absolute top-1/2 right-10 z-10 -translate-y-1/2 cursor-pointer text-[#282828] hover:text-[#FFAE00] transition-colors">
          <CircleChevronRight size={45} strokeWidth={1.2} absoluteStrokeWidth />
        </div>
      </Swiper>
        
    </div>
  );
};

export default Banner;

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';
import { TSlide } from '@/types/types';

const HomeCarousel = ({ slides }: { slides: TSlide[] }) => {


  return (
    <div className="w-full -z-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide slide={slide} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

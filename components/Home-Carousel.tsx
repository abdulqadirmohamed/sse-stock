'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';



const HomeCarousel = () => {
    const slides = [
        {
          image: '/images/hero-img-1.jpg',
          title: 'How financially literate are you? Find out by completing this short survey',
          description: 'Explore our latest collection and get inspired.',
          buttonText: 'Click here',
          buttonLink: 'https://survey.zohopublic.com/zs/KyD7i1?fbclid=IwAR2FpJgaMGw8tKqnAV8gzrZh8kPSbkKQ4HruPDE_ZdkgEXGRqN6c1xUOgfI',
        },
        {
          image: '/images/hero-img-2.jpg',
          title: 'Take part of our Business Etiquette & Professionalism Training Course',
          description: 'Grab limited-time deals on your favorite products!',
          buttonText: 'Find out more',
          buttonLink: 'http://sse.so/business-etiquette-professionalism/',
        },
        {
          image: '/images/hero-img-3.jpg',
          title: 'Historical Somali businesses have been bought and sola Informally networks.',
          description: 'Don’t miss out on the latest arrivals.',
          buttonText: 'Find out more',
          buttonLink: 'about-us',
        },
      ];

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
              <div className="w-full h-[600px] relative">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover object-top"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  quality={100}
                />
  
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
                  <h1 className="md:w-1/2 mx-auto text-3xl md:text-5xl font-bold mb-4 text-center">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 text-center">
                    {/* {slide.description} */}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="px-6 py-3 bg-blue-800 hover:bg-blue-700 rounded-md text-white text-lg transition"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}

export default HomeCarousel
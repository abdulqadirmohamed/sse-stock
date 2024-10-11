'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const images = ['/images/hero-img-1.jpg', '/images/hero-img-2.jpg', '/images/hero-img-3.jpg'];



const HomeCarousel = () => {

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
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[600px] relative">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="object-cover object-center"
                                fill
                                priority
                                style={{objectFit:"cover"}}
                                quality={100}

                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomeCarousel
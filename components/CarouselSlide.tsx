'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { TSlide } from '@/types/types';

// Props interface
interface CarouselSlideProps {
  slide: TSlide;
  index: number;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, index }) => {
  const imageUrl = slide.image?.formats?.large?.url || '/images/placeholder.jpg';

  return (
    <div className="w-full lg:h-[600px] md:h-[400px] h-[300px] relative">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={`Slide ${index + 1}`}
        className="object-cover object-top"
        fill
        priority
        style={{ objectFit: 'fill' }}
        quality={100}
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
        <h1 className="lg:w-1/2 md:w-3/4 w-11/12 mx-auto lg:text-5xl md:text-3xl text-2xl font-bold mb-4 text-center">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl md:mb-6 mb-2 text-center">
          {slide.description}
        </p>
        <Link
          href={slide.buttonLink || '#'}
          className="md:px-6 md:py-3 px-3 py-2 bg-[#174C81] hover:bg-[#1b2f44e1] rounded-md text-white md:text-lg  transition"
        >
          {slide.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CarouselSlide;

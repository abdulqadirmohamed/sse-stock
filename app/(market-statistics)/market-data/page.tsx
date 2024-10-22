import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="">
      <div className='md:h-[500px] h-[200px] relative -z-50 border-b-8 border-blue-900'>
        <Image
          src={'/images/hero-img-1.jpg'}
          alt='about-image'
          className="object-cover object-center"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <div className='lg:grid grid-cols-5 md:mt-[-400px] z-50'>
        <div className='lg:block md:col-span-2 hidden'></div>
        <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Data</h1>
          <div className='md:text-[18px] text-gray-600'>
            <p>Available on request, our market data is an up-to-date trade-related data. It includes a range
              of information such as price, bid/ask quotes and market volume. Our operations department
              provide reports on various assets and financial instruments, which are then distributed to
              traders and investors.</p>

            <p className="my-5">
              Usually, the market data is used by traders and investors to assess the worth of various
              assets and will inform their approach to entering and exiting trades. The purpose of using
              market data is to get as much information about the asset you are planning to trade, in order
              to calculate market risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

import Image from 'next/image'
import React from 'react'
import { ArrowRight, Check} from 'lucide-react'
import Link from 'next/link'

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
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Commodities</h1>
          <div className='md:text-[18px] text-gray-600'>
            <p>
              Located in East Africa and surrounded by the Indian Ocean and the Red Sea, Somalia boasts the longest coastline in Africa. Its prime location in one of the busiest shipping lanes in the world makes it a prime area for the trading of livestock; the country’s biggest commodity. The trade is a multi-billion-dollar industry, generating over 100,000 jobs in 2014 and contributing to 40% of Somalia’s GDP.
            </p>
            <p className="my-5">
              With 60% of the population still practicing pastoralism as a way of life, the industry shows no signs of slowing.
            </p>
            <h3 className='font-bold text-gray-700 mt-5'>Livestock figures</h3>
            <ul className='my-3 ml-3'>
              <li className='flex items-center gap-2'>
                <span className='bg-blue-800 w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                  <Check size={20} />
                </span>
                14.6 million sheep
              </li>
              <li className='flex items-center gap-2'>
                <span className='bg-blue-800 w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                  <Check size={20} />
                </span>
                14 million goats
              </li>
              <li className='flex items-center gap-2'>
                <span className='bg-blue-800 w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                  <Check size={20} />
                </span>
                7.5 million camels (the largest population of camels in the world!)
              </li>
              <li className='flex items-center gap-2'>
                <span className='bg-blue-800 w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                  <Check size={20} />
                </span>
                5.6 million cattle
              </li>
            </ul>

            <p className="my-5">
            The livestock market is popular with breeders, commodity traders, commercial slaughter houses, professional and private investors. The commodity section is the ideal marketplace for any interested party to invest and recoup their proceeds in this highly lucrative opportunity.
            </p>
            <Link href={"contact-us"} className='bg-blue-900 px-3 py-2 rounded-md text-white flex items-center justify-center hover:animate-pulse'>Contact us to find out more about livestock <ArrowRight className='ml-3' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

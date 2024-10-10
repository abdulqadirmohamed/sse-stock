import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const page = () => {
  return (
    <div className="container mx-auto">
      <div className={`${styles.container}`}>
        <div className={`${styles.item1} bg-red-500`}>
         
        </div>
        <div className={`${styles.item2} bg-green-500`}>2</div>
        {/* <div className={`${styles.container}`}>3</div> */}
      </div>
    </div>
  )
}

export default page












{/* <div className="md:h-screen relative">
<div className='md:h-[500px] h-[200px] relative'>
  <Image
    src={'/images/hero-img-1.jpg'}
    alt='about-image'
    className="object-cover object-center"
    layout="fill"
    objectFit="cover"
    quality={100}
  />
</div>
<div className='bg-white md:absolute top-24 right-0 md:w-2/3 p-10 md:shadow-md'>
  <div className=''>
    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>About us</h1>
    <div className='md:text-[20px] pr-10 text-gray-600'>
      <p>The Somali Stock Exchange (SSE) was founded by the Somali Economic Forum (SEF) which has as its principal aim, encouraging Foreign Direct Investment (FDI) into Somalia’s growing economy as well as promoting private sector development. The Somali Stock Exchange has already made history by becoming the first ever stock exchange to operate inside of Somalia. The SSE began selling its first shares in on the 1st of September 2015 at the exchange’s headquarters in Garowe, Somalia.</p>
      <p className='my-5'>Historically, the process of trade in shares goes back centuries as traditionally shares were sold and bought through close networks and among business associates. However, economists have noted that in recent years, the emergence of various stock exchanges in African states have played a pivotal role in fostering economic and private sector growth. The SSE aims to create a sustainable securities market in Somalia where holders of financial securities, bonds and buyers or investors meet. The substantial demand for capital is increasing by the day for Somali businesses, consisting of both large firms and SME’s. Liquidity is very important in economic transactions it would be impossible to create liquidity without a market or an exchange to unite investors and shareholders, it is with this aim that the SSE launched.  </p>
      <p className='my-5'>According to the latest statistics over 3 billion USD flows into Somalia every year, with most of the funds coming from private investors in the form of remittances. Due to the intense competition between start-ups, few investors look to pay shares of the well performing companies with long term growth. The SSE aims to overcome this issue in order to allow Somalia to meet its burgeoning economic potential in the future.</p>

      <div className='my-4'>
        <h3 className='font-bold'>Our Vision</h3>
        <p>To be a excellent, Somalia-based stock exchange: the premier capital market in the Horn of Africa and the East African Region which best serves its stakeholders and partners.</p>
      </div>

      <div className='my-4'>
        <h3 className='font-bold'>Our Mission </h3>
        <p>The mission of the SEE is to develop and operate efficiently a high quality market and exchange for its Somali and international investors. SSE will serve and empower its customers by providing world class market technology, innovative products and solutions as well as a medium which is fair, transparent and above all, an efficient market.</p>
      </div>
    </div>
  </div>
</div>
</div> */}
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
          priority
          style={{objectFit:"cover"}}
          quality={100}
        />
      </div>
      <div className='lg:grid grid-cols-5 md:mt-[-400px] z-50'>
        <div className='lg:block md:col-span-2 hidden'></div>
        <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Shares</h1>
          <div className='md:text-[18px] text-gray-600'>
            <p>Stocks (Shares) are the most common type of financial security traded on the SSE and other stock markets. Stocks give you full voting rights at annual general meetings, dividends (should the company pay these) and a share of the residual economic value if the company unwinds. This allows you to benefit from significant capital returns if the company is successful.</p>
           
            <p className="my-5">
            Professional and private investors invest in Common Stocks for a chance of gaining inflation-beating returns on their investment. Investors can use a stockbroker to select stocks on their behalf or make their own share choices and purchases through an online stock trading account.
            </p>

            <p className="my-5">
            This stock picking by private investors is best suited to investors who have the time and skills to assess the financial performance of companies, along with a sound understanding of how a stock market works.
            </p>

            <p className="my-5">
            As with all investment products, the stock market comes with risks. Share prices can rise and fall and all investors should be aware that values may fluctuate during the year.
            </p>

            <Link href={"contact-us"} className='bg-blue-900 px-3 py-2 rounded-md text-white flex items-center justify-center hover:animate-pulse'>Contact us to find out more about livestock <ArrowRight className='ml-3' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

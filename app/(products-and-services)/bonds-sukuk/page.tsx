import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react'
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
        {/* Col 1 */}
        <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Shares</h1>
          <div className='md:text-[18px] text-gray-600'>
            <p>A bond is a debt instrument, used to lower your risk or to diversify your portfolio. Both Government Bonds and Corporate Bonds will be listed on the Somali Stock Exchange.</p>
            <div>
              <h3 className='text-xl font-bold text-gray-700 my-5'>Corporate Bonds (Sukuk)</h3>
              <p className="my-5">
                These debt instruments provide a way for corporate entities to raise money for large capital projects. Investors lend money in return for regular profit payments, and after a predetermined period the loans are paid back to the investors.
              </p>
              <p className="my-5">
                Listing the bond on the SSE Debt Board improves the issuers’ ability to raise finance because it allows investors to sell the loan to other investors should they wish. Because each loan has specific characteristics that appeal to different investors at different times, Corporate Bonds create a secondary market with the potential for significant returns.
              </p>
              <p className="my-5">
                Corporate Bonds carry no claim to ownership, so bondholders’ repayments take priority over payments to shareholders.
              </p>
              <p className="my-5">
                Corporate Bonds usually pay higher interest rates than Government Bonds, but are considered to be a less risky way to invest in a company than buying Shares. Liquidity remains relatively low compared with government debt, but issuance continues to grow.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-gray-800 my-5'>Government Bonds</h3>
              <p className="my-5">Government entities issue Bonds and list them on the debt market in order to raise funds for large capital projects such as roads, power stations and hospitals. It’s a great way for investors and banks to buy the paper to enhance returns on their portfolios.</p>
              <p className="my-5">Anyone can invest in government bonds. The listed debt market is predominately a wholesale market with large investors taking positions in bonds to satisfy portfolio needs, but this option also caters for the smaller investor.</p>
              <Link href={"contact-us"} className='bg-blue-900 px-3 py-2 rounded-md text-white flex items-center justify-center hover:animate-pulse'>Contact us to find out more about livestock <ArrowRight className='ml-3' /></Link>
            </div>

          </div>
        </div>

        {/* Col 2 */}
        <div className='lg:block md:col-span-2 hidden'></div>
      </div>
    </div>
  )
}

export default page

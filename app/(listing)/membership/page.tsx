import Image from 'next/image'
import React from 'react'
import { Check } from 'lucide-react'
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
                    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Membership</h1>
                    <div className='md:text-[18px] text-gray-600'>
                        <p>The Somali Stock Exchange (SSE) aims to be the premier exchange in the Horn of Africa and the East Africa which best serves its members, stakeholders and partners. The SSE is dedicated to making financial markets in Somalia run more efficiently in order to help our members achieve their business and investment needs, within the framework of an accredited and innovative stock exchange. The SSE offers four types of membership:</p>
                        <ul className='my-3 ml-6 marker:text-[#174C81]'>
                            <li className='list-decimal'>Individual</li>
                            <li className='list-decimal'>Corporate</li>
                            <li className='list-decimal'>Issuer</li>
                            <li className='list-decimal'>Advisor membership </li>
                        </ul>
                        <p className='my-5'>
                            The Corporate Membership option is specifically designed for brokers, institutional investors along with proprietary traders. As a SSE corporate member you can trade in a range of financial products and directly trade on the SSE’s platforms, including equities, commodities and bonds. Our corporate members form a network of over hundred trading participants, with a diverse range of corporations including banks, technology and energy firms, stockbrokers, and institutional investors. </p>

                        <p className='my-5'>To become a corporate member, prospective corporate candidates must complete an application form, undergo a due diligence review from the SSE team and execute an agreement stating that they will adhere to all Somali Stock Exchange rules and regulations.
                        </p>
                        <p className="my-5">The Individual membership is designed for investors and traders in financial markets.

                        </p>
                        <p className="my-5">To become an investor, an individual (or institution) must select a chosen broker/trader and then the designated broker/trader must thereafter open an account.</p>
                        <p className="my-5">A stockbroker is an appointed agent who is authorized to execute, buy or sell stock or options on behalf of an investor’s account. When selecting a suitable broker to represent your interests as an investor, <Link className='text-[#174C81] underline' href={'/nominated-advisers/'}>you should confirm the broker’s status through the SSE website</Link> </p>
                        <p className="my-5">The SSE also recommends investors meet with the chosen stockbroker trading house or company in order to determine whether the services they offer match your company’s specific needs. Stockbrokers and designated traders have a fiduciary responsibility to their clients which implies sound management and confidentiality.​​ </p>
                        <h3 className='font-bold text-gray-700 mt-5'>Some of the benefits of SSE Membership include:</h3>
                        <ul className='my-3 ml-3'>
                            <li className='flex items-center gap-2'>
                                <span className='bg-[#174C81] w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                                    <Check size={20} />
                                </span>
                                Financial markets training courses
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='bg-[#174C81] w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                                    <Check size={20} />
                                </span>
                                Access to propriety market data
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='bg-[#174C81] w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                                    <Check size={20} />
                                </span>
                                Trading software access from leading financial services vendors
                            </li>
                            <li className='flex  gap-2'>
                                <span className='bg-[#174C81] w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                                    <Check size={20} />
                                </span>
                                Financial news alerts regarding earnings results, company announcements and global share prices
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='bg-[#174C81] w-4 h-4 text-white p-[2px] rounded-full flex items-center justify-center'>
                                    <Check size={20} />
                                </span>
                                Quarterly company reports and institutional sector reports
                            </li>
                        </ul>
                        <p className="my-5">Access to a Dedicated Analyst (DA) at the SSE who can act as a consultant or point of contact for potential investors</p>
                        <p className="my-5 italic">*Advisors (nominated advisors) typically consist of stockbrokers, public relations firms and corporate law firms as well as audit and accounting companies. These groups of firms generally have the license to advise our individual and corporate clients.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

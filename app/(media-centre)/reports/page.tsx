import { ArrowDownToLine } from 'lucide-react'
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
                    priority
                    style={{ objectFit: "cover" }}
                    quality={100}
                />
            </div>
            <div className='lg:grid grid-cols-5 md:mt-[-400px] z-50'>
                
                <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
                    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Reports</h1>
                    <div className=''>
                        <div className='md:flex gap-4'>
                            <Image width={200} height={100} src={'https://sse.so/wp-content/uploads/2021/07/imageedit_5_5921151392.jpg'} alt='report' />
                            <div className='p-4'>
                                <h1 className='font-bold text-blue-800 text-2xl'>The Somali Postal Express Annual Report 2021 is now available.</h1>
                                <p className='my-3'>The annual report is an all-inclusive report on the company’s activities throughout the
                                    previous year. The report is intended to give investors and other interested parties full
                                    information about the company’s activities and financial performance. It allows investors to
                                    have a sound judgement about the company and its potential growth.</p>
                                <button className='bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-2 group'>
                                    Download
                                    <ArrowDownToLine size={20} className='group-hover:rotate-180 transition-all ease-in-out duration-300' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                    <hr />
                    </div>
                </div>

                <div className='lg:block md:col-span-2 hidden'></div>
            </div>
        </div>
    )
}

export default page
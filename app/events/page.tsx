import { ArrowDownToLine, CalendarRange, MapPin, Timer } from 'lucide-react'
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
                <div className='lg:block md:col-span-2 hidden'></div>
                <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
                    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Events</h1>
                    <div className=''>
                        <div className='md:flex gap-4'>
                            <Image width={200} height={100} src={'https://sse.so/wp-content/uploads/2021/07/imageedit_5_5921151392.jpg'} alt='report' />
                            <div className='p-4'>
                                <h1 className='font-bold text-blue-800 text-2xl'>Exchanges and climate action: financing the net zero transition</h1>
                                <div className='my-5'>
                                    <div className='flex items-center gap-3'>
                                        <CalendarRange className='text-blue-800 my-2'/>
                                        <p>14 November, 2024</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-2'>
                                        <Timer className='text-blue-800'/>
                                        <p>12:46:32 PM</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-2'>
                                        <MapPin className='text-blue-800'/>
                                        <p>Garowe Punland</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
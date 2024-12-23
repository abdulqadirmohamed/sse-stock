import { fetchData } from '@/lib/fetchData'
import { TEvent } from '@/types/types'
import { CalendarRange, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
    const events = await fetchData('/api/events');

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
                    {events && events.length > 0 ? (events.map((event: TEvent) => (
                            <div className='flex gap-4 items-center group my-10' key={event.id}>
                                <div className='w-80 h-64 relative overflow-hidden'>
                                    <Image
                                        className='group-hover:scale-125 group-hover:rotate-15 transition-all duration-300 ease-in-out'
                                        src={`${event.cover?.formats?.small?.url}`}
                                        alt='post-image'
                                        fill
                                        priority
                                        style={{ objectFit: "cover" }}
                                        quality={100} />
                                </div>
                                <div className='my-5 px-6 h-full flex flex-col justify-between items-stretch'>
                                    <Link href={'#'} className='font-bold group-hover:text-blue-800 md:text-2xl text-lg line-clamp-2'>
                                        {event.title}
                                    </Link>
                                    <div className='mt-6'>
                                        <div className='flex items-center gap-3'>
                                            <CalendarRange className='text-[#174C81] my-2' />
                                            <p>14 November, 2024</p>
                                        </div>

                                        <div className='flex items-center gap-3 my-2'>
                                            <Timer className='text-[#174C81]' />
                                            <p>12:46:32 PM</p>
                                        </div>
                                        <div className='flex items-center gap-3 my-2'>
                                            <MapPin className='text-[#174C81]' />
                                            <p>Garowe Punland</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       ))) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
import { CalendarRange, ChevronRight, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TweetEmbed from './TweetEmbed'

const LatestEvents = () => {

    const events = [
        {
            image: '/images/event-1.jpg',
            title: 'Exchanges and climate action: financing the net zero transition',
        },
        {
            image: '/images/event-2.jpg',
            title: 'Empowering Innovation for Sustainable Development in Somalia',
        }
    ];
    return (
        <div className="container mx-auto my-4 px-6">
            <div className='flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='w-full text-2xl font-bold'>Latest Events</h1>
                </div>
                <div>
                    <Link href={'/events'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                </div>
            </div>
            <span className='w-full h-[2px] bg-blue-900 block my-2'></span>
            <div className='md:grid grid-cols-2 gap-6 my-5'>
                {events.map((event) => (
                    <div className='bg-gray-100/80 rounded overflow-hidden group'>
                        <div className='flex gap-4 items-center'>
                            <div className='w-full h-64 relative overflow-hidden'>
                                <Image
                                    className='group-hover:scale-125 group-hover:rotate-15 transition-all duration-300 ease-in-out'
                                    src={event.image}
                                    alt='post-image'
                                    fill
                                    priority
                                    style={{ objectFit: "cover" }}
                                    quality={100} />
                            </div>
                            <div className='my-5 px-6 h-full flex flex-col justify-between items-stretch'>
                                <Link href={'#'} className='font-bold hover:text-blue-800 md:text-2xl text-lg line-clamp-2'>{event.title}</Link>
                                <div className='mt-6'>
                                    <div className='flex items-center gap-3'>
                                        <CalendarRange className='text-blue-800 my-2' />
                                        <p>14 November, 2024</p>
                                    </div>

                                    <div className='flex items-center gap-3 my-2'>
                                        <Timer className='text-blue-800' />
                                        <p>12:46:32 PM</p>
                                    </div>
                                    <div className='flex items-center gap-3 my-2'>
                                        <MapPin className='text-blue-800' />
                                        <p>Garowe Punland</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestEvents
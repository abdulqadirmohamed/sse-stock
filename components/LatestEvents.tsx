import { CalendarRange, ChevronRight, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TweetEmbed from './TweetEmbed'

const LatestEvents = () => {
    return (
        <div className="container mx-auto my-4 px-6">
            <div className='flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='w-full text-2xl font-bold'>Latest Events</h1>
                </div>
                <div>
                    <Link href={'#'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                </div>
            </div>
            <span className='w-full h-[2px] bg-blue-900 block my-2'></span>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2 bg-gray-100/80 py-10'>
                    <div className='md:flex gap-4'>
                        <div>
                            <Image width={150} height={50} src={'https://sse.so/wp-content/uploads/2021/07/imageedit_5_5921151392.jpg'} alt='report' />
                        </div>
                        <div className='my-5'>
                        <h1 className='font-bold text-blue-800 text-2xl'>Exchanges and climate action: financing the net zero transition</h1>
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
                <div>
                    <TweetEmbed/>
                </div>
            </div>
        </div>
    )
}

export default LatestEvents
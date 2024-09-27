import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = () => {
    return (
            <div className='container mx-auto my-4 p-10'>
                <div className='flex  gap-4 justify-between items-center'>
                    <div>
                        <h1 className='w-full text-2xl font-bold'>Events</h1>
                    </div>
                    <div>
                        <Link href={'#'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                    </div>
                </div>
                <span className='w-full h-[2px] bg-blue-900 block my-2'></span>

                {/*  */}
                <div className='grid grid-cols-2'>
                    {/* image */}
                    <div className=''>
                        <Image
                            src={'https://sse.so/wp-content/uploads/2021/09/sse_12.jpg'}
                            alt='post-image'
                            width={400}
                            height={400}
                            objectFit="cover"
                            quality={100} />
                    </div>
                    {/* title */}
                </div>
            </div>

    )
}

export default Events
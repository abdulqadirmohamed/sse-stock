import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { list } from 'postcss'
import React from 'react'

const Events = () => {
    const eventList = [
        { id: 1, title: "Learn the importance of business etiquette, why it matters and how to improve business etiquette culture" },
        { id: 2, title: "Learn how to develop a culture of excellence" },
        { id: 3, title: "Understand the three components of business etiquette – appearance, communication, and behaviour" },
        { id: 4, title: "Know how to make a great first impression and how to dress appropriately" },
        { id: 5, title: "Understand how your personal style influences how you communicate with others Learn the do’s and don’ts of telephone and email etiquette" },
        { id: 6, title: "Learn the do’s and don’ts of telephone and email etiquette" },
        { id: 7, title: "Explore the business etiquette of different cultures and countries" },
        { id: 8, title: "Understand the etiquette of how to deal with ethical dilemmas, personal issues, and difficult people" },
    ]
    return (
        <div className='container mx-auto my-4 p-10'>
            <div className='flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='w-full text-2xl font-bold'>Events</h1>
                </div>
                <div>
                    <Link href={'#'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                </div>
            </div>
            <span className='w-full h-[2px] bg-blue-900 block my-2'></span>

            {/*  */}
            <div className='grid md:grid-cols-2 gap-6 my-5'>
                {/* image */}
                <div className=''>
                    <Image
                        src={'https://sse.so/wp-content/uploads/2021/09/sse_12.jpg'}
                        alt='post-image'
                        width={800}
                        height={400}
                        objectFit="cover"
                        quality={100} />
                </div>
                {/* title */}
                <div>
                    <h1 className='text-2xl font-bold text-blue-900'>Business Etiquette & Professionalism</h1>
                    <ul className='my-4'>
                        {eventList.map((list) => (
                            <li className='list-disc my-2 ml-3 text-sm' key={list.id}>{list.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Events
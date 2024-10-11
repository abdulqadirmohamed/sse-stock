import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const images = ['', ,];

const LatestInsights = () => {
    const posts = [
        {
            id: 1,
            featureImg: '/images/blog/img1.jpg',
            title: 'Somali Stock Exchange together with UN Women Ring the Bell for Gender Equality ',
            date: '13 March 2024'
        },
        {
            id: 2,
            featureImg: '/images/blog/img2.jpg',
            title: 'Fresh Del Monte Announces Banana Partnership in Somalia',
            date: '12 June 2024'
        },
        {
            id: 3,
            featureImg: '/images/blog/img3.jpg',
            title: 'How FDIs can improve economic growth in Somalia',
            date: '24 April 2024'
        }
    ]
    return (
        <div className="bg-gray-100">
            <div className='container mx-auto my-4 p-10'>
                <div className='flex  gap-4 justify-between items-center'>
                    <div>
                        <h1 className='w-full text-2xl font-bold'>Latest Insights</h1>
                    </div>
                    <div>
                       <Link href={'#'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                    </div>
                </div>
                <span className='w-full h-[2px] bg-blue-900 block my-2'></span>
                {/* Posts */}
                <div className='grid md:grid-cols-3 gap-10 my-6'>
                    {posts.map((post) => (
                        <Link href={'#'} className='shadow group' key={post.id}>
                            <div className='w-full h-64 relative'>
                                <Image
                                    src={post.featureImg}
                                    alt='post-image'
                                    fill
                                    style={{objectFit:"cover"}}
                                    quality={100} />
                            </div>
                            <div className='p-4 bg-white'>
                                <h1 className='text-2xl text-blue-900 font-bold line-clamp-2 group-hover:underline'>{post.title}</h1>
                                <p className='my-2 text-sm'>{post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default LatestInsights
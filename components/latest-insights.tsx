import { limitFetchData } from '@/lib/fetchData';
import { TBlog } from '@/types/types';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestInsights = async ()  => {
    const posts = await limitFetchData('/api/blogs', 3);

    return (
        <div className="bg-gray-100">
            <div className='container mx-auto my-4 p-10'>
                <div className='flex  gap-4 justify-between items-center'>
                    <div>
                        <h1 className='w-full lg:text-3xl text-2xl text-[#174C81] font-bold font-Arial'>Latest Insights</h1>
                    </div>
                    <div>
                       <Link href={'#'} className='bg-[#174C81] hover:bg-[#1b2f44e1] px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
                    </div>
                </div>
                <span className='w-full h-[2px] bg-[#174C81] block my-2'></span>
                {/* Posts */}
                <div className='grid md:grid-cols-3 gap-10 my-6'>
                {posts && posts.length > 0 ? (
                    posts.map((post:TBlog) => (
                        <Link href={`news/${post.slug}`} className='shadow group' key={post.id}>
                            <div className='w-full h-64 relative overflow-hidden'>
                                <Image
                                className='group-hover:scale-125 transition-all duration-300 ease-in-out'
                                    src={`${post.cover?.formats?.large?.url}`}
                                    alt='post-image'
                                    fill
                                    priority 
                                    style={{objectFit:"cover"}}
                                    quality={100} />
                            </div>
                            <div className='p-4 bg-white'>
                                <h1 className='text-2xl text-[#174C81] font-bold line-clamp-2 group-hover:underline'>{post.title}</h1>
                                <p className='my-2 text-sm'>{new Date(post.publishedAt).toLocaleDateString()}</p>
                            </div>
                        </Link>
                    ))) : null}
                </div>
            </div>

        </div>
    )
}

export default LatestInsights
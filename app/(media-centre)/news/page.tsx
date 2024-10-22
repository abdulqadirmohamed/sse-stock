import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TBlog } from '@/types/types'
import { fetchData } from '@/lib/fetchData'


const page = async () => {
    const posts = await fetchData('/api/blogs');

    return (
        <div >
            <div className='container mx-auto my-4 p-10'>
                {/* Posts */}
                <div className='grid md:grid-cols-3 gap-10 my-6'>
                    {posts && posts.length > 0 ? (posts.map((post: TBlog) => (
                        <Link href={`/news/${post.slug}`} className='shadow group' key={post.id}>
                            <div className='w-full h-64 relative overflow-hidden'>
                                <Image
                                    className='group-hover:scale-125 transition-all duration-300 ease-in-out'
                                    src={`${post.cover?.formats?.large?.url}`}
                                    alt='post-image'
                                    fill
                                    style={{ objectFit: "cover" }}
                                    quality={100} />
                            </div>
                            <div className='p-4 bg-white'>
                                <h1 className='text-2xl text-blue-900 font-bold line-clamp-2 group-hover:underline'>{post.title}</h1>
                                <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}
                                </p>
                            </div>
                        </Link>
                    ))) : null}
                </div>
            </div>

        </div>
    )
}

export default page
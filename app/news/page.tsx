import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const page = () => {
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
    },
    {
        id: 4,
        featureImg: '/images/blog/img3.jpg',
        title: 'How FDIs can improve economic growth in Somalia',
        date: '24 April 2024'
    }
]
  return (
    <div >
    <div className='container mx-auto my-4 p-10'>
      

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

export default page
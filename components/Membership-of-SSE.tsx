'use client'
import Image from 'next/image'
import React from 'react'

const MembershipOfSSE = () => {
    const logos = [
        { id: 1, img: 'https://sse.so/wp-content/uploads/2021/07/oicExchanges_logo.png' },
        { id: 2, img: 'https://sse.so/wp-content/uploads/2021/07/EASEA-2-copy.png' },
        { id: 3, img: 'https://sse.so/wp-content/uploads/2021/07/UN-SSE-Initiative-.png' }

    ]
    return (
        <div className='container mx-auto my-4 p-10'>
            <div className='flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='w-[300px] lg:text-3xl text-2xl text-[#174C81] font-bold font-Arial'>Membership of SSE </h1>
                </div>
        
            <span className='w-full h-[2px] bg-blue-900 block my-2'></span>
            </div>

            <div className='grid md:grid-cols-3 gap-6 my-5'>
                {logos.map((logo) => (
                    <div className='flex justify-center items-center border p-10 h-full' key={logo.id}>
                        <Image
                            src={logo.img}
                            alt='Memebership of SSE'
                            width={200}
                            height={200}
                            quality={100} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MembershipOfSSE
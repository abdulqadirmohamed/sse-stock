import { Mail, MapPin, Phone, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue-900 text-blue-50 min-h-[60px] mt-auto'>
            <div className="container mx-auto md:px-0 px-12 md:grid grid-cols-3 gap-12 py-10">
                <div>
                    <Link href={''} className='text-xl font-bold hover:underline'>Somali Stock Exchange</Link>
                    <p className='my-3 text-sm'>Historically, shares in Somali businesses have been bought and sold informally through close networks. However, economists have noted that in recent years, the emergence of various stock exchanges in African states have played a pivotal role in fostering economic and private sector growth</p>
                </div>
                <div>
                    <Link href={''} className='text-xl font-bold hover:underline'>Contact Information</Link>
                    <div className='flex items-center gap-4 my-3'>
                        <Phone />
                        <div>
                            <p>+252 618870155</p>
                            <p>+252 907127973</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 my-3'>
                        <Mail />
                        <p>info@sse.so</p>
                    </div>
                    <div className='flex items-center gap-4 my-3'>
                        <MapPin />
                        <p>SSE House, 21st Oct Road, Waberi P.O.Box 40001, Mogadishu, Somalia</p>
                    </div>
                </div>
                <div>
                    <Link href={''} className='text-xl font-bold hover:underline'>Latest Updates</Link>
                    <div className='my-3'>
                        <Link href={'#'} className='border-b-[1px] pb-3'>
                            <h1 className='font-semibold'>Business Etiquette & Professionalism</h1>
                            <p className='text-sm'>Learn the importance of business etiquette, why it matters and how to improve business etiquette</p>
                        </Link>
                        <hr className='my-2'/>
                        <Link href={'#'} className='border-b-[1px] pb-3'>
                            <h1 className='font-semibold'>Business Etiquette & Professionalism</h1>
                            <p className='text-sm'>Learn the importance of business etiquette, why it matters and how to improve business etiquette</p>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-5 text-center'>
                Social media
            </div>
        </div>
    )
}

export default Footer
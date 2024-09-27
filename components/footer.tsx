import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue-900 text-blue-100'>
            <div className="container mx-auto grid grid-cols-3 gap-6 py-10">
                <div>
                    <Link href={''} className='text-2xl font-bold'>Somali Stock Exchange</Link>
                    <p className='my-3'>Historically, shares in Somali businesses have been bought and sold informally through close networks. However, economists have noted that in recent years, the emergence of various stock exchanges in African states have played a pivotal role in fostering economic and private sector growth</p>
                </div>
                <div>
                    <Link href={''} className='text-2xl font-bold'>Contact Information</Link>
                    <div className='flex items-center gap-4'>
                        <PhoneCall />
                        <div>
                            <p>+252 618870155</p>
                            <p>+252 907127973</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href={''} className='text-2xl font-bold'>Latest Updates</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
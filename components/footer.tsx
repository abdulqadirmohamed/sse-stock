import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { RiWhatsappFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className='bg-[#174C81] text-blue-50 min-h-[60px] mt-auto'>
                <div className="container mx-auto md:px-0 px-12 md:grid grid-cols-3 gap-12 py-10">
                    <div>
                        <Link href={'about-us'} className='text-xl font-bold hover:underline'>Somali Stock Exchange</Link>
                        <p className='my-3 text-sm'>Historically, shares in Somali businesses have been bought and sold informally through close networks. However, economists have noted that in recent years, the emergence of various stock exchanges in African states have played a pivotal role in fostering economic and private sector growth</p>
                    </div>
                    <div>
                        <Link href={'contact-us'} className='text-xl font-bold hover:underline'>Contact Information</Link>
                        <div className='flex items-center gap-4 my-3'>
                            <Phone />
                            <div>
                                <Link href={'tel:+252618870155'} className='hover:underline'>+252 618870155</Link> <br />
                                <Link href={'tel:+252907127973'} className='hover:underline'>+252 907127973</Link>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 my-3'>
                            <Mail />
                            <Link href={'mailto:info@sse.so'} className='hover:underline'>info@sse.so</Link>
                        </div>
                        <div className='flex items-center gap-4 my-3'>
                            <MapPin size={30}/>
                            <p>SSE House, 21st Oct Road, Waberi P.O.Box 40001, Mogadishu, Somalia</p>
                        </div>
                    </div>
                    <div>
                        <Link href={'news'} className='text-xl font-bold hover:underline'>Latest Updates</Link>
                        <div className='my-3'>
                            <Link href={'#'} className='border-b-[1px] pb-3'>
                                <h1 className='font-semibold'>Business Etiquette & Professionalism</h1>
                                <p className='text-sm'>Learn the importance of business etiquette, why it matters and how to improve business etiquette</p>
                            </Link>
                            <hr className='my-2' />
                            <Link href={'#'} className='border-b-[1px] pb-3'>
                                <h1 className='font-semibold'>Business Etiquette & Professionalism</h1>
                                <p className='text-sm'>Learn the importance of business etiquette, why it matters and how to improve business etiquette</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex justify-center items-center gap-3 text-blue-100 py-4">
                <Link href={'https://www.facebook.com/somalistockexchange/'}><FaFacebookF /></Link>
                <Link href={'https://www.youtube.com/@somalistockexchange1383'}><BsTwitterX /></Link>
                <Link href={'#'}><FaLinkedin /></Link>
                <Link href={'#'}><FaYoutube /></Link>
                <Link href={'#'}><RiWhatsappFill /></Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { menuList } from './Constant'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'



const Header = () => {

    return (
        <>
            <div className='bg-blue-900 w-full py-2 text-white text-sm text-center md:block hidden'>
                <div className='container mx-auto flex items-center justify-center gap-1'>
                <p>Somali Stock Exchange - 2024 Financial Literacy Survey</p>
                <Link href={'https://ae.visamiddleeast.com/content/dam/VCOM/regional/cemea/unitedarabemirates/documents/financial-literacy-survey-2024.pdf'} 
                target='_blank' className='bg-white text-blue-900 px-2 py-[2px]'>Read more</Link>
                </div>
            </div>
            <div className="border-b py-6">
                <div className="container mx-auto flex items-center justify-between md:px-0 px-10">
                    {/* Logo */}
                    <Link href={'/'}>
                        <Image
                            src={'https://sse.so/wp-content/uploads/2021/07/sselogonew.png'}
                            alt="logo"
                            width={100}
                            height={50}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <DesktopNav menuList={menuList} />

                    {/* Mobile Navigation */}
                    <MobileNav menuList={menuList} />

                    {/* Social Media Link */}
                    <div className="hidden lg:flex items-center gap-3 text-blue-900">
                        <Link href={'https://www.facebook.com/somalistockexchange'} target='_blank'><FaFacebookF /></Link>
                        <Link href={'https://x.com/SomaliStockExch'} target='_blank'><BsTwitterX /></Link>
                        <Link href={'#'}><FaLinkedin /></Link>
                        <Link href={'https://www.youtube.com/@somalistockexchange1383'} target='_blank'><FaYoutube /></Link>
                        <Link href={'#'}><RiWhatsappFill /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

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
                <Link href={'#'}><FaFacebookF /></Link>
                <Link href={'#'}><BsTwitterX /></Link>
                <Link href={'#'}><FaLinkedin /></Link>
                <Link href={'#'}><FaYoutube /></Link>
                <Link href={'#'}><RiWhatsappFill /></Link>
            </div>
        </div>
    </div>
    )
}

export default Header

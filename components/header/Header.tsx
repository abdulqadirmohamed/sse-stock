'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { menuList } from './Constant'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { FaFacebookF, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<number[]>([]); // To track open sub-menus

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle submenu (clickable label and arrow)
    const toggleSubMenu = (index: number) => {
        if (openSubMenus.includes(index)) {
            setOpenSubMenus(openSubMenus.filter((i) => i !== index)); // Close if already open
        } else {
            setOpenSubMenus([...openSubMenus, index]); // Open submenu
        }
    };

    // Close mobile menu after clicking a submenu link
    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false); // Close the entire mobile menu
    };
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
            <div className="hidden md:flex items-center gap-3 text-blue-900">
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

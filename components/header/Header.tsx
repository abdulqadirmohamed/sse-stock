import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image'
import Link from 'next/link'
const menuLinks = []


const Header = () => {
    return (
        <div className='border-b py-6'>
            <div className='container mx-auto flex items-center justify-between '>
                <Link href={'/'}>
                    <Image src={'https://sse.so/wp-content/uploads/2021/07/sselogonew.png'} alt='logo' width={100} height={50} />
                </Link>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Link href={'about-us'}>About us</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Products and Services</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Shares</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Bonds/Sukuk</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>commodities</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Listing</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Listed Companies</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Nominated</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Membership</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Market Statistics</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>Market Snapshot</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Market Data</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Media Centre</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>News</MenubarItem>
                            <MenubarSeparator />
                            <MenubarSub>
                                <MenubarSubTrigger>Publications</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarItem>Reports</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Links</MenubarItem>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                            <MenubarItem>Events</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

                <div>
                    <Link href={'#'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
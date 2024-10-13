import { useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types/types';

interface MobileNavProps {
    menuList: MenuItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ menuList }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle submenu
    const toggleSubMenu = (index: number) => {
        if (openSubMenus.includes(index)) {
            setOpenSubMenus(openSubMenus.filter((i) => i !== index)); // Close if already open
        } else {
            setOpenSubMenus([...openSubMenus, index]); // Open submenu
        }
    };

    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
    };

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMobileMenu}
                className="p-2 focus:outline-none"
                aria-label="Toggle Mobile Menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            <nav
                className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-500 ease-in-out mt-10 px-6 z-50 ${
                    isMobileMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
                }`}
                style={{ overflow: 'hidden' }} // Smooth collapse/expand
            >
                {menuList.map((menuItem, index) => (
                    <div key={index} className="p-4 border-b">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleSubMenu(index)}
                        >
                            <p className="font-semibold">
                                {menuItem.href ? (
                                    <Link href={menuItem.href}>
                                        <span onClick={handleCloseMenu}>
                                            {menuItem.label}
                                        </span>
                                    </Link>
                                ) : (
                                    menuItem.label
                                )}
                            </p>
                            {menuItem.subItems && (
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-300 ${
                                        openSubMenus.includes(index) ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </div>
                        {menuItem.subItems && openSubMenus.includes(index) && (
                            <div className="pl-4 transition-all duration-900 ease-in-out">
                                {menuItem.subItems.map((subItem, subIndex) => (
                                    <div key={subIndex}>
                                        <p className="py-2">
                                            {subItem.href ? (
                                                <Link href={subItem.href}>
                                                    <span onClick={handleCloseMenu}>
                                                        {subItem.label}
                                                    </span>
                                                </Link>
                                            ) : (
                                                subItem.label
                                                // <div>
                                                //      {subItem.subItems?.map(
                                                //         (subSubItem, subSubIndex) => (
                                                //             <div key={subSubIndex}>
                                                //                 <p>
                                                //                     {subSubItem.href ? (
                                                //                         <Link
                                                //                             href={subSubItem.href}
                                                //                         >
                                                //                             {subSubItem.label}
                                                //                         </Link>
                                                //                     ) : (
                                                //                         subSubItem.label
                                                //                     )}
                                                //                 </p>
                                                                
                                                //             </div>
                                                //         )
                                                //     )}
                                                // </div>
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default MobileNav;

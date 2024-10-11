import Link from 'next/link';
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
import { MenuItem } from '@/types/types';

interface DesktopNavProps {
    menuList: MenuItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ menuList }) => {
    return (
        <nav className="hidden md:block">
            <Menubar>
                {menuList.map((menuItem, index) => (
                    <MenubarMenu key={index}>
                        <MenubarTrigger>
                            {menuItem.href ? (
                                <Link href={menuItem.href}>{menuItem.label}</Link>
                            ) : (
                                menuItem.label
                            )}
                        </MenubarTrigger>
                        {menuItem.subItems && (
                            <MenubarContent>
                                {menuItem.subItems.map((subItem, subIndex) => (
                                    <div key={subIndex}>
                                        {subItem.subItems ? (
                                            <MenubarSub>
                                                <MenubarSubTrigger>
                                                    {subItem.label}
                                                </MenubarSubTrigger>
                                                <MenubarSubContent>
                                                    {subItem.subItems.map(
                                                        (subSubItem, subSubIndex) => (
                                                            <div key={subSubIndex}>
                                                                <MenubarItem>
                                                                    {subSubItem.href ? (
                                                                        <Link
                                                                            href={subSubItem.href}
                                                                        >
                                                                            {subSubItem.label}
                                                                        </Link>
                                                                    ) : (
                                                                        subSubItem.label
                                                                    )}
                                                                </MenubarItem>
                                                                {menuItem.subItems &&
                                                                    subIndex !==
                                                                        menuItem.subItems.length - 1 && (
                                                                        <MenubarSeparator />
                                                                    )}
                                                            </div>
                                                        )
                                                    )}
                                                </MenubarSubContent>
                                            </MenubarSub>
                                        ) : (
                                            <MenubarItem>
                                                {subItem.href ? (
                                                    <Link href={subItem.href}>
                                                        {subItem.label}
                                                    </Link>
                                                ) : (
                                                    subItem.label
                                                )}
                                            </MenubarItem>
                                        )}
                                        {menuItem.subItems &&
                                            subIndex !== menuItem.subItems.length - 1 && (
                                            <MenubarSeparator />
                                        )}
                                    </div>
                                ))}
                            </MenubarContent>
                        )}
                    </MenubarMenu>
                ))}
            </Menubar>
        </nav>
    );
};

export default DesktopNav;

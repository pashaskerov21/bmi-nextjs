'use client'
import React from 'react'
import { MenuTranslateType, MenuType } from '../types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuLinkProps = {
    linkData: MenuType,
    requiredMenuTranslate: MenuTranslateType[],
}

const MenuLink: React.FC<MenuLinkProps> = ({ linkData, requiredMenuTranslate }) => {
    const pathname = usePathname();
    const requiredLink: MenuTranslateType | undefined = requiredMenuTranslate.find((item) => item.menu_id === linkData.id);
    // const isActive = linkData.path === '/' ? pathname === linkData.path : pathname.includes(linkData.path.replace(/\//g, ''));
    const isActive = (linkData.path === '/' && ['/az', '/en'].includes(pathname)) || (linkData.path !== '/' && pathname.includes(linkData.path)) ? true : false;
    if (requiredLink) {
        return (
            <React.Fragment>
                <Link href={linkData.path} className={`link ${isActive ? 'active' : ''}`}>{requiredLink?.name}</Link>
            </React.Fragment>
        )
    }
    return null;
}

export default MenuLink

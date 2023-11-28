'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuLinkProps, MenuTranslateDataType } from '../types'



const MenuLink: React.FC<MenuLinkProps> = ({ activeLocale, menuData, menuTranslateData }) => {
    const pathname = usePathname();
    const requiredLink: MenuTranslateDataType | undefined = menuTranslateData.find((data) => data.menu_id === menuData.id && data.lang === activeLocale);
    const isActive = (menuData.path === '/' && ['/az', '/en'].includes(pathname)) || (menuData.path !== '/' && pathname.includes(menuData.path)) ? true : false;
    if (requiredLink) {
        return (
            <React.Fragment>
                <Link href={`/${activeLocale}/${menuData.path}`} className={`link ${isActive ? 'active' : ''}`}>{requiredLink?.name}</Link>
            </React.Fragment>
        )
    }
    return null;
}

export default MenuLink

'use client'
import React from 'react'
import { MenuTranslateType, MenuType } from '../types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type MenuLinkProps = {
    activeLocale: string,
    linkData: MenuType,
    requiredMenuTranslate: MenuTranslateType[],
}

const MenuLink: React.FC<MenuLinkProps> = ({ activeLocale, linkData, requiredMenuTranslate }) => {
    const pathname = usePathname();
    const requiredLink: MenuTranslateType | undefined = requiredMenuTranslate.find((item) => item.menu_id === linkData.id);
    const isActive = (linkData.path === '/' && ['/az', '/en'].includes(pathname)) || (linkData.path !== '/' && pathname.includes(linkData.path)) ? true : false;
    if (requiredLink) {
        return (
            <React.Fragment>
                <Link href={`/${activeLocale}/${linkData.path}`} className={`link ${isActive ? 'active' : ''}`}>{requiredLink?.name}</Link>
            </React.Fragment>
        )
    }
    return null;
}

export default MenuLink

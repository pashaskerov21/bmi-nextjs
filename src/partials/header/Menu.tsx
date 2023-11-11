'use client'
import { MenuTranslateType, MenuType, SettingType } from '@/src/types';
import React from 'react'
import { LinkMenuWrapper, MenuBackdrop } from './style';
import { Container } from '@/src/styles/utils';
import Link from 'next/link';
import Image from 'next/image';
// icons
import { FaXmark } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { Languages, MenuLink, SocialMedia } from '@/src/components';

type MenuProps = {
    settingData: SettingType;
    menuData: MenuType[],
    requiredMenuTranslate: MenuTranslateType[],
    theme: string,
    menuShow: boolean,
    toggleMenu: () => void,
    fixed: boolean,
    currentLanguage: string,
}

const Menu: React.FC<MenuProps> = ({ settingData, menuData, requiredMenuTranslate, theme, menuShow, toggleMenu, fixed, currentLanguage }) => {
    return (
        <React.Fragment>
            <MenuBackdrop $menuShow={menuShow} onClick={toggleMenu} />
            <LinkMenuWrapper $themeStatus={theme} $menuShow={menuShow} $fixed={fixed}>
                <Container>
                    <div className="header d-lg-none">
                        <Link href='/'>
                            <Image src={settingData.logo.shortWhite} width={100} height={50} alt='' />
                        </Link>
                        <div className="right">
                            <Languages currentLanguage={currentLanguage}/>
                            <button type='button' className="close-button" onClick={toggleMenu}>
                                <FaXmark />
                            </button>
                        </div>
                    </div>
                    <div className="body">
                        <Link href='/' className='fix-logo'>
                            <Image src={theme === 'dark' ? settingData.logo.shortWhite : settingData.logo.short} width={140} height={50} alt='' />
                        </Link>
                        <div className={`page-links ${fixed ? 'fix-true' : ''}`}>

                            {
                                menuData.map(link => (
                                    <React.Fragment key={link.id}>
                                        <MenuLink linkData={link} requiredMenuTranslate={requiredMenuTranslate}/>
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer d-lg-none">
                        <SocialMedia settingData={settingData} />
                        <div className="contact">
                            <Link href='/'>
                                <span className='icon'><FaEnvelope /></span>
                                <span className="label">{settingData.mail}</span>
                            </Link>
                            <Link href='/'>
                                <span className='icon'><FaPhone /></span>
                                <span className="label">{settingData.phone}</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </LinkMenuWrapper>
        </React.Fragment>
    )
}

export default Menu

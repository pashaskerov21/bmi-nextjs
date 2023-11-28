'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LinkMenuWrapper, ThemeButton } from './style';
import { Container } from '@/src/styles/utils';
// icons
import { FaXmark } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { Languages, MenuLink, SocialMedia } from '@/src/components';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { MenuProps } from '@/src/types';

const Menu: React.FC<MenuProps> = ({
    settingData,
    menuData,
    menuTranslateData,
    theme,
    menuShow,
    setMenuShow,
    toggleMenu,
    toggleTheme,
    fixed,
    activeLocale }) => {
    return (
        <React.Fragment>
            {menuShow ? <div className='black-backdrop' onClick={toggleMenu}/> : null}
            <LinkMenuWrapper $themeStatus={theme} $menuShow={menuShow} $fixed={fixed}>
                <Container>
                    <div className="header d-lg-none">
                        <Link href={`/${activeLocale}`} onClick={() => setMenuShow(false)}>
                            <Image src={settingData.logo.shortWhite} width={100} height={50} alt='' />
                        </Link>
                        <div className="right">
                            <Languages activeLocale={activeLocale} />
                            <button type='button' className="close-button" onClick={toggleMenu}>
                                <FaXmark />
                            </button>
                        </div>
                    </div>
                    <div className="body">
                        {
                            fixed ? (
                                <Link href={`/${activeLocale}`} className='fix-logo'>
                                    <Image src={theme === 'dark' ? settingData.logo.shortWhite : settingData.logo.short} width={100} height={50} alt='' />
                                </Link>
                            ) : null
                        }
                        <div className="right">
                            <div className={`page-links ${fixed ? 'fix-true' : ''}`}>
                                {
                                    menuData.map((data) => (
                                        <div key={data.id} onClick={toggleMenu}>
                                            <MenuLink activeLocale={activeLocale} menuData={data} menuTranslateData={menuTranslateData} />
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                fixed ? (
                                    <React.Fragment>
                                        <Languages activeLocale={activeLocale} />
                                        <ThemeButton $themeStatus={theme} onClick={toggleTheme}>
                                            <div className="icon">
                                                <div className="sun"><BsFillSunFill /></div>
                                                <div className="moon"><BsMoonStarsFill /></div>
                                            </div>
                                        </ThemeButton>
                                    </React.Fragment>
                                ) : null
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

'use client'
import { MenuTranslateType, MenuType, SettingType } from '@/src/types';
import React from 'react'
import { GeneralNavBar, ThemeButton } from './style';
import { Container } from '@/src/styles/utils';
import Link from 'next/link';
import Image from 'next/image';

// icon
import { FaSun, FaPhone } from 'react-icons/fa6'
import { FaSearch, FaEnvelope } from 'react-icons/fa'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsSun, BsMoonFill } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi'
import Search from './Search';
import { Languages, SocialMedia } from '@/src/components';
import Menu from './Menu';

type HeaderProps = {
    settingData: SettingType;
    menuData: MenuType[],
    requiredMenuTranslate: MenuTranslateType[],
    theme: string,
    toggleTheme: () => void,
    currentLanguage: string,
}

const Header: React.FC<HeaderProps> = ({ settingData, menuData, requiredMenuTranslate, theme, toggleTheme, currentLanguage }) => {
    const [fixed, setFixed] = React.useState<boolean>(false);
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            if (this.scrollY > 500) {
                setFixed(true);
            } else {
                setFixed(false)
            }
        });

        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);

    const [searchShow, setSearchShow] = React.useState<boolean>(false);
    const [menuShow, setMenuShow] = React.useState<boolean>(false);
    const toggleSearch = React.useCallback(() => {
        setSearchShow(!searchShow)
    }, [searchShow])
    const toggleMenu = React.useCallback(() => {
        setMenuShow(!menuShow)
    }, [menuShow])
    return (
        <header>
            <GeneralNavBar $fixed={fixed}>
                <Container>
                    <div className="inner">
                        <Link href='/' className='logo'>
                            <Image className='d-lg-none' src={theme === 'dark' ? settingData.logo.shortWhite : settingData.logo.short} width={90} height={40} priority={true} alt='logo' />
                            <Image className='d-none d-lg-block' src={theme === 'dark' ? settingData.logo.textIconVerticalWhite : settingData.logo.textIconVertical} width={300} height={120} priority={true} alt='logo' />
                        </Link>
                        <div className="right">

                            <div className="top">
                                <SocialMedia settingData={settingData}/>
                                <div className="contact d-none d-lg-flex">
                                    <Link href='/'>
                                        <span className='icon'><FaEnvelope /></span>
                                        <span className="label d-none d-xxl-block">{settingData.mail}</span>
                                    </Link>
                                    <Link href='/'>
                                        <span className='icon'><FaPhone /></span>
                                        <span className="label d-none d-xxl-block">{settingData.phone}</span>
                                    </Link>
                                </div>
                                <ThemeButton $themeStatus={theme} onClick={toggleTheme}>
                                    <div className="icon">
                                        <div className="sun"><BsFillSunFill /></div>
                                        <div className="moon"><BsMoonStarsFill /></div>
                                    </div>
                                </ThemeButton>
                            </div>
                            <div className="bottom">
                                <Languages currentLanguage={currentLanguage}/>
                                <Search searchShow={searchShow} toggleSearch={toggleSearch} />
                                <div className="mobile d-lg-none">
                                    <button className='search-button' onClick={toggleSearch}>
                                        <BiSearch />
                                    </button>
                                    <button className='menu-button' onClick={toggleMenu}>
                                        <FiMenu />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </GeneralNavBar>
            <Menu fixed={fixed} menuData={menuData} requiredMenuTranslate={requiredMenuTranslate} menuShow={menuShow} settingData={settingData} theme={theme} toggleMenu={toggleMenu} currentLanguage={currentLanguage}/>
        </header>
    )
}

export default React.memo(Header)
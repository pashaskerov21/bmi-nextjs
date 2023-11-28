'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { FooterBottom, FooterTop } from './style';
import { Container } from '@/src/styles/utils';
import { MenuLink, SocialMedia } from '@/src/components';
import { FooterProps } from '@/src/types'

const Footer: React.FC<FooterProps> = ({
    activeLocale,
    settingData, 
    menuData, 
    menuTranslateData, 
    requiredSettingTranslate, 
    footerDictionary }) => {

    return (
        <footer>
            <FooterTop>
                <Container>
                    <div className="top-grid">
                        <Link href={`/${activeLocale}`} className='logo grid-item'>
                            <Image src={settingData.logo.textIconWhite} width={240} height={160} priority={true} alt='logo' />
                        </Link>
                        <div className="footer-links">
                            <h3 className="title">{footerDictionary.menus}</h3>
                            {
                                menuData.map((data) => (
                                    <React.Fragment key={data.id}>
                                        <MenuLink activeLocale={activeLocale} menuData={data} menuTranslateData={menuTranslateData} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                        <div className="footer-links grid-item">
                            <h3 className="title">{footerDictionary.useful_links}</h3>
                            <Link href='/faq'>{footerDictionary.faq}</Link>
                            <Link href='/career'>{footerDictionary.career}</Link>
                        </div>
                        <div className="footer-links grid-item">
                            <h3 className="title">{footerDictionary.contact}</h3>
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
                            <SocialMedia settingData={settingData} />
                        </div>
                    </div>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <div className="inner">
                        <div className="copyright">{requiredSettingTranslate.copyright}</div>
                    </div>
                </Container>
            </FooterBottom>
        </footer>
    )
}

export default React.memo(Footer)

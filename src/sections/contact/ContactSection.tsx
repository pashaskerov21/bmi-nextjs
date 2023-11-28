'use client'
import React from 'react'
import { ContactFormContainer, PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { ContactWrapper } from './style'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Breadcrumb, ContactSectionProps } from '@/src/types'

const ContactSection: React.FC<ContactSectionProps> = ({ activeLocale, titleDictionary, buttonDictionary, formDictionary, settingData, settingTranslateData }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/contact`,
            name: titleDictionary.contact_us,
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={titleDictionary.contact_us}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <ContactWrapper>
                    <div className="left">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="icon"><FaPhone /></div>
                                <div className="label">{settingData.phone}</div>
                            </div>
                            <div className="contact-item">
                                <div className="icon"><FaEnvelope /></div>
                                <div className="label">{settingData.mail}</div>
                            </div>
                            <div className="contact-item">
                                <div className="icon"><FaLocationDot /></div>
                                <div className="label">{settingTranslateData.address}</div>
                            </div>
                        </div>
                        <div className="application-form">
                            <h3 className="title">{titleDictionary.apply_form}</h3>
                            <ContactFormContainer
                                buttonDictionary={buttonDictionary}
                                formDictionary={formDictionary} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="map">
                            {
                                settingData.map_url ? (
                                    <iframe src={settingData.map_url} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                ) : null
                            }
                        </div>
                    </div>
                </ContactWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(ContactSection)

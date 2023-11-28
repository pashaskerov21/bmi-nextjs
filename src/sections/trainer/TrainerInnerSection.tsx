'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageTitle } from '@/src/components'
import { Container, Row, RowCol, Section } from '@/src/styles/utils'
import { TrainerDetailWrapper } from './style'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Breadcrumb, TrainerInnerSectionProps } from '@/src/types'


const TrainerInnerSection: React.FC<TrainerInnerSectionProps> = ({ activeLocale, trainerData, translateData, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainers,
            path: `/${activeLocale}/trainers`

        },
        {
            id: 2,
            name: translateData.name,
            path: `/${activeLocale}/trainers/${encodeURIComponent(translateData.name.toLocaleLowerCase())}`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={translateData.name}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <TrainerDetailWrapper>
                    <Row $content='right'>
                        <RowCol>
                            <div className="image">
                                <Image className='trainer-img' src={trainerData.image} width={500} height={300} alt='trainer' />
                                <div className="hover-div">
                                    <div className="name">{translateData.name}</div>
                                    <div className="position">{translateData.position}</div>
                                </div>
                            </div>
                        </RowCol>
                        <RowCol>
                            <div className="text">{translateData.text}</div>
                            <div className="social-icons">
                                <Link href={trainerData.facebook ? trainerData.facebook : '/'}><FaFacebookF /></Link>
                                <Link href={trainerData.instagram ? trainerData.instagram : '/'}><FaInstagram /></Link>
                                <Link href={trainerData.linkedin ? trainerData.linkedin : '/'}><FaLinkedinIn /></Link>
                                <Link href={trainerData.twitter ? trainerData.twitter : '/'}><FaTwitter /></Link>
                            </div>
                        </RowCol>
                    </Row>
                </TrainerDetailWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(TrainerInnerSection)

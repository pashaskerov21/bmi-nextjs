'use client'
import { PageTitle } from '@/src/components'
import { Container, Row, RowCol, Section } from '@/src/styles/utils'
import { Breadcrumb, EventGalleryType, EventTranslateType, EventType } from '@/src/types'
import React from 'react'
import { EventContentWrapper } from './style'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
import Slider from 'react-slick'
import { eventGallerySliderSettings } from '@/src/utils'
import Link from 'next/link'

type EventProps = {
    activeLocale: string,
    eventData: EventType,
    eventTranslateData: EventTranslateType,
    filteredGalleryData: EventGalleryType[],
    titleDictionary: { [key: string]: string },
}

const EventInnerSection: React.FC<EventProps> = ({ activeLocale, eventData, eventTranslateData,filteredGalleryData, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.events,
            path: `/${activeLocale}/events`

        },
        {
            id: 1,
            name: eventTranslateData.title,
            path: `/${activeLocale}/events/${encodeURIComponent(eventTranslateData.title.toLocaleLowerCase())}`

        },
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle activeLocale={activeLocale} title={eventTranslateData.title} breadcrumbs={breadcrumbs} titleDictionary={titleDictionary} />
                <EventContentWrapper>
                    <Row $content='right'>
                        <RowCol>
                            <div className="content-image">
                                <Image src={eventData.cover} width={600} height={600} alt='' />
                            </div>
                        </RowCol>
                        <RowCol>
                            <div className="content">
                                <h2 className="title">{eventTranslateData.title}</h2>
                                <div className="icons">
                                    <div className="item">
                                        <FaCalendarAlt />
                                        <span>{eventTranslateData.date}</span>
                                    </div>
                                    <div className="item">
                                        <FaLocationDot />
                                        <span>{eventTranslateData.location}</span>
                                    </div>
                                </div>
                                <div className="text">
                                    {eventTranslateData.text}
                                </div>
                            </div>
                        </RowCol>
                    </Row>
                    <Slider {...eventGallerySliderSettings}>
                        {
                            filteredGalleryData.map((data) => (
                                <div className='slide-inner' key={data.id}>
                                    <Link href={data.img} className="gallery-item" data-fancybox="">
                                        <Image src={data.img} width={250} height={250} alt='' />
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                </EventContentWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(EventInnerSection)

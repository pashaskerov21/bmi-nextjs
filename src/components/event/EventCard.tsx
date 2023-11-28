
import React from 'react'
import { EventCardWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'
import { EventCardProps, EventTranslateDataType } from '@/src/types'



const EventCard: React.FC<EventCardProps> = ({ activeLocale, eventData, eventTranslateData }) => {
    const requiredTranslate: EventTranslateDataType | undefined = eventTranslateData.find((data) => data.event_id === eventData.id && data.lang === activeLocale)
    return (
        <React.Fragment>
            {
                requiredTranslate ? (
                    <EventCardWrapper>
                        <Image className='cover' src={eventData.cover} width={500} height={500} alt='' />
                        <div className="content">
                            <Image className='logo' src={eventData.logo} width={100} height={100} alt='' />
                            <Link href={`/${activeLocale}/events/${encodeURIComponent(requiredTranslate.title.toLocaleLowerCase())}`}>{requiredTranslate.title}</Link>
                        </div>
                    </EventCardWrapper>
                ) : null
            }
        </React.Fragment>
    )
}

export default React.memo(EventCard)

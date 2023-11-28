import React from 'react'
import { EventCardSecondWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { EventCardProps, EventTranslateDataType } from '@/src/types'

const EventCardSecond: React.FC<EventCardProps> = ({ activeLocale, eventData, eventTranslateData, buttonDictionary }) => {
  const requiredTranslate: EventTranslateDataType | undefined = eventTranslateData.find((data) => data.event_id === eventData.id && data.lang === activeLocale)
  return (
    <React.Fragment>
      {
        requiredTranslate ? (
          <EventCardSecondWrapper>
            <div className="image">
              <Image src={eventData.cover} width={400} height={200} alt='' />
              <div className="hover">
                <Link href={`/events/${encodeURIComponent(requiredTranslate.title.toLocaleLowerCase())}`}>{buttonDictionary?.details}</Link>
              </div>
            </div>
            <h3 className="title">{requiredTranslate.title}</h3>
            <div className="icons">
              <div className="item">
                <FaCalendarAlt />
                <span>{requiredTranslate.date}</span>
              </div>
              <div className="item">
                <FaLocationDot />
                <span>{requiredTranslate.location}</span>
              </div>
            </div>
          </EventCardSecondWrapper>
        ) : null
      }
    </React.Fragment>
  )
}

export default React.memo(EventCardSecond)

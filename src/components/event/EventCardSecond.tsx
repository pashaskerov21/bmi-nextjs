import { EventDataType } from '@/src/types'
import React from 'react'
import { EventCardSecondWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

type EventCardSecondProps = {
  eventItem: EventDataType,
}

const EventCardSecond: React.FC<EventCardSecondProps> = ({ eventItem }) => {
  return (
    <EventCardSecondWrapper>
      <div className="image">
        <Image src={eventItem.cover} width={400} height={200} alt='' />
        <div className="hover">
          <Link href={`/events/${encodeURIComponent(eventItem.title.toLocaleLowerCase())}`}>ətraflı</Link>
        </div>
      </div>
      <h3 className="title">{eventItem.title}</h3>
      <div className="icons">
        <div className="item">
          <FaCalendarAlt />
          <span>{eventItem.date}</span>
        </div>
        <div className="item">
          <FaLocationDot />
          <span>{eventItem.location}</span>
        </div>
      </div>
    </EventCardSecondWrapper>
  )
}

export default React.memo(EventCardSecond)

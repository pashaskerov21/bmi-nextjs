'use client'
import { EventCardSecond, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { EventTranslateType, EventType } from '@/src/types'
import { otherEventsSliderSettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

type EventProps = {
  activeLocale: string,
  eventData: EventType[],
  eventTranslateData: EventTranslateType[],
  titleDictionary: { [key: string]: string },
  buttonDictionary: { [key: string]: string },
}

const OtherEventSection: React.FC<EventProps> = ({ activeLocale, eventData, eventTranslateData, titleDictionary, buttonDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.other_events} />
        <Slider {...otherEventsSliderSettings}>
          {
            eventData.map((data) => (
              <div className='slide-inner' key={data.id}>
                <EventCardSecond
                  activeLocale={activeLocale}
                  eventData={data}
                  eventTranslateData={eventTranslateData} 
                  buttonDictionary={buttonDictionary} />
              </div>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default OtherEventSection

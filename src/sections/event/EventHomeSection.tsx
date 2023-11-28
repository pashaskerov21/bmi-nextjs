'use client'
import React from 'react'
import Slider from 'react-slick'
import { EventCard, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { eventHomeSliderSettings } from '@/src/utils'
import { EventSectionProps } from '@/src/types'

const EventHomeSection: React.FC<EventSectionProps> = ({ activeLocale, eventData, eventTranslateData, titleDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.event_home} />
        <Slider {...eventHomeSliderSettings}>
          {
            eventData.map((data) => (
              <div className='slide-inner' key={data.id}>
                <EventCard activeLocale={activeLocale} eventData={data} eventTranslateData={eventTranslateData} />
              </div>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default React.memo(EventHomeSection)

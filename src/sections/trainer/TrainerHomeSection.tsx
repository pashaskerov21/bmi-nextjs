'use client'
import React from 'react'
import Slider from 'react-slick'
import { SectionTitle, TrainerCard } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainerSectionProps } from '@/src/types'
import { trainerSliderettings } from '@/src/utils'

const TrainerHomeSection: React.FC<TrainerSectionProps> = ({ activeLocale, trainerData, trainerTranslateData, titleDictionary }) => {
  return (
    <Section $py={20} $py_xl={40}>
      <Container>
        <SectionTitle title={titleDictionary.trainer_home} />
        <Slider {...trainerSliderettings}>
          {
            trainerData.map((data) => (
              <div className='slide-inner' key={data.id}>
                <TrainerCard activeLocale={activeLocale} trainerData={data} trainerTranslateData={trainerTranslateData} />
              </div>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default React.memo(TrainerHomeSection)

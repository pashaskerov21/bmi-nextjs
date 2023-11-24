'use client'
import { SectionTitle, TrainingCard, TrainingCardContent } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types'
import { otherTrainingSliderSettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

type TrainingProps = {
  activeLocale: string,
  categoryTranslateData: TrainingCategoryTranslateType[],
  trainingData: TrainingType[],
  trainingTranslateData: TrainingTranslateType[],
  titleDictionary: { [key: string]: string },
  buttonDictionary: { [key: string]: string },
}

const OtherTrainingSection: React.FC<TrainingProps> = ({ activeLocale, categoryTranslateData, trainingData, trainingTranslateData, titleDictionary, buttonDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.other_trainings} />
        <Slider {...otherTrainingSliderSettings}>
          {
            trainingData.map((data) => (
              <React.Fragment key={data.id}>
                <div className="slide-inner">
                  <TrainingCardContent
                    activeLocale={activeLocale}
                    categoryTranslateData={categoryTranslateData}
                    trainingData={data}
                    trainingTranslateData={trainingTranslateData}
                    buttonDictionary={buttonDictionary} />
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default OtherTrainingSection

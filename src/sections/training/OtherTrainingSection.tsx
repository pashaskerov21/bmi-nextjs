'use client'
import { SectionTitle, TrainingCard, TrainingCardContent } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { OtherTrainingSectionProps } from '@/src/types'
import { otherTrainingSliderSettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

const OtherTrainingSection: React.FC<OtherTrainingSectionProps> = ({ activeLocale, trainingCategoryTranslateData, trainingData, trainingTranslateData, titleDictionary, buttonDictionary }) => {
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
                    categoryTranslateData={trainingCategoryTranslateData}
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

export default React.memo(OtherTrainingSection)

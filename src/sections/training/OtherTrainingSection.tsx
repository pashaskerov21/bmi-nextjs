'use client'
import { SectionTitle, TrainingCard } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types'
import { otherTrainingSliderSettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

type TrainingProps = {
  activeLocale: string,
  categoryTranslateData: TrainingCategoryTranslateType,
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
                  <CardContent
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

type CardProps = {
  activeLocale: string,
  categoryTranslateData: TrainingCategoryTranslateType,
  trainingData: TrainingType,
  trainingTranslateData: TrainingTranslateType[],
  buttonDictionary: { [key: string]: string },
}

const CardContent: React.FC<CardProps> = ({ activeLocale, categoryTranslateData, trainingData, trainingTranslateData, buttonDictionary }) => {
  const requiredTrainingTranslate: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.training_id === trainingData.id && data.lang === activeLocale);
  return (
    <React.Fragment>
      {requiredTrainingTranslate ? (
        <TrainingCard
          cardType='link'
          title={requiredTrainingTranslate.title}
          image={trainingData.cardImage}
          slug={`/${activeLocale}/trainings/${encodeURIComponent(categoryTranslateData.title.toLocaleLowerCase())}/${requiredTrainingTranslate.title.toLocaleLowerCase()}`}
          buttonDictionary={buttonDictionary} />
      ) : null}
    </React.Fragment>
  )
}

export default OtherTrainingSection

"use client"
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction'
import { OtherTrainingSection, TrainingInnerSection } from '@/src/sections'
import { LocaleStateType, TrainingInnerPageLayoutType } from '@/src/types'
import React from 'react'
import { useDispatch } from 'react-redux'

const TrainingInnerPageLayout: React.FC<TrainingInnerPageLayoutType> = ({
  activeCategoryTranslateData,
  activeLocale,
  activeTrainingData,
  activeTrainingTranslateData,
  allTrainingTranslateData,
  allCategoryTranslateData,
  buttonDictionary,
  formDictionary,
  titleDictionary,
  trainerData,
  trainerTranslateData,
  trainingCategoryTranslateData,
  otherTrainingData,
  trainingTranslateData,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = [
    {
      locale: 'az',
      slug: `trainings/${encodeURIComponent(allCategoryTranslateData[0].title.toLocaleLowerCase())}/${encodeURIComponent(allTrainingTranslateData[0].title.toLocaleLowerCase())}`
    },
    {
      locale: 'en',
      slug: `trainings/${encodeURIComponent(allCategoryTranslateData[1].title.toLocaleLowerCase())}/${encodeURIComponent(allTrainingTranslateData[1].title.toLocaleLowerCase())}`
    },
  ]
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <TrainingInnerSection
        activeLocale={activeLocale}
        activeCategoryTranslateData={activeCategoryTranslateData}
        trainingData={activeTrainingData}
        trainingTranslateData={activeTrainingTranslateData}
        trainerData={trainerData}
        trainerTranslateData={trainerTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary}
        formDictionary={formDictionary} />
      {
        otherTrainingData.length > 0 ? (
          <OtherTrainingSection
            activeLocale={activeLocale}
            trainingCategoryTranslateData={trainingCategoryTranslateData}
            trainingData={otherTrainingData}
            trainingTranslateData={trainingTranslateData}
            titleDictionary={titleDictionary}
            buttonDictionary={buttonDictionary} />
        ) : null
      }
    </React.Fragment>
  )
}

export default TrainingInnerPageLayout

"use client"
import React from 'react'
import { LocaleStateType, TrainingPageLayoutType } from '@/src/types'
import { ApplyFormSection, TrainingPageSection } from '@/src/sections'
import { useDispatch } from 'react-redux'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction'

const TrainingPageLayout: React.FC<TrainingPageLayoutType> = ({
  activeLocale,
  buttonDictionary,
  formDictionary,
  titleDictionary,
  trainingCategoryData,
  trainingCategoryTranslateData,
  trainingData,
  trainingTranslateData,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = [
    {
      locale: 'az',
      slug: 'trainings'
    },
    {
      locale: 'en',
      slug: 'trainings',
    }
  ]
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <TrainingPageSection
        activeLocale={activeLocale}
        trainingCategoryData={trainingCategoryData}
        trainingCategoryTranslateData={trainingCategoryTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary} />
      <ApplyFormSection
        activeLocale={activeLocale}
        trainingData={trainingData}
        trainingTranslateData={trainingTranslateData}
        titleDictionary={titleDictionary}
        formDictionary={formDictionary}
        buttonDictionary={buttonDictionary} />
    </React.Fragment>
  )
}

export default TrainingPageLayout

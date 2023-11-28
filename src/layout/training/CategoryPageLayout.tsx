"use client"
import React from 'react'
import { CategoryPageLayoutType, LocaleStateType } from '@/src/types'
import { CategoryPageSection } from '@/src/sections'
import { useDispatch } from 'react-redux'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction'

const CategoryPageLayout: React.FC<CategoryPageLayoutType> = ({
  activeData,
  activeLocale,
  activeTranslateData,
  allTranslateData,
  buttonDictionary,
  titleDictionary,
  trainingData,
  trainingTranslateData,
  trainingCategoryTranslateData,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = allTranslateData.map((data) => {
    return {
      locale: data.lang,
      slug: `trainings/${encodeURIComponent(data.title.toLocaleLowerCase())}`
    }
  })
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <CategoryPageSection
        activeLocale={activeLocale}
        categoryData={activeData}
        activecategoryTranslateData={activeTranslateData}
        trainingCategoryTranslateData={trainingCategoryTranslateData}
        trainingData={trainingData}
        trainingTranslateData={trainingTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary} />
    </React.Fragment>
  )
}

export default CategoryPageLayout

'use client'
import React from 'react'
import { VacancySection } from '@/src/sections'
import { LocaleStateType, VacancyPageLayoutType } from '@/src/types'
import { useDispatch } from 'react-redux';
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';

const VacancyPageLayout: React.FC<VacancyPageLayoutType> = ({
  activeLocale,
  buttonDictionary,
  activeData,
  activeTranslateData,
  allTranslateData,
  formDictionary,
  titleDictionary,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = allTranslateData.map((data) => {
    return {
      locale: data.lang,
      slug: `career/${encodeURIComponent(data.title.toLocaleLowerCase())}`
    }
  })
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <VacancySection
        activeLocale={activeLocale}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary}
        formDictionary={formDictionary}
        careerData={activeData}
        careerTranslateData={activeTranslateData}
      />
    </React.Fragment>
  )
}

export default VacancyPageLayout

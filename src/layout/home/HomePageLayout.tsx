'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction'
import {
  AboutHomeSection,
  ApplyFormSection,
  BannerSection,
  CustomerSection,
  EventHomeSection,
  GallerySection,
  NewsHomeSection,
  PartnerSection,
  ReportSection,
  TrainerHomeSection,
  TrainingHomeSection
} from '@/src/sections'
import { HomeLayoutType, LocaleStateType } from '@/src/types'
import { useDispatch } from 'react-redux'


const HomePageLayout: React.FC<HomeLayoutType> = ({
  aboutData,
  aboutReportData,
  aboutReportTranslateData,
  aboutTranslateData,
  activeLocale,
  bannerData,
  bannerTranslateData,
  buttonDictionary,
  customerData,
  eventData,
  eventTranslateData,
  formDictionary,
  galleryData,
  newsData,
  newsTranslateData,
  partnerData,
  reportData,
  reportTranslateData,
  titleDictionary,
  trainerData,
  trainerTranslateData,
  trainingCategoryData,
  trainingCategoryTranslateData,
  trainingData,
  trainingTranslateData,

}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = [
    {
      locale: 'az',
      slug: ''
    },
    {
      locale: 'en',
      slug: '',
    }
  ]
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <BannerSection
        activeLocale={activeLocale}
        bannerData={bannerData}
        bannerTranslateData={bannerTranslateData}
        buttonDictionary={buttonDictionary} />
      <ReportSection
        activeLocale={activeLocale}
        reportData={reportData}
        reportTranslateData={reportTranslateData} />
      <AboutHomeSection
        activeLocale={activeLocale}
        aboutData={aboutData}
        aboutTranslateData={aboutTranslateData}
        aboutReportData={aboutReportData}
        aboutReportTranslateData={aboutReportTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary} />
      <TrainingHomeSection
        activeLocale={activeLocale}
        trainingCategoryData={trainingCategoryData}
        trainingCategoryTranslateData={trainingCategoryTranslateData}
        trainingData={trainingData}
        trainingTranslateData={trainingTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary} />
      <TrainerHomeSection
        activeLocale={activeLocale}
        trainerData={trainerData}
        trainerTranslateData={trainerTranslateData}
        titleDictionary={titleDictionary} />
      <EventHomeSection
        activeLocale={activeLocale}
        eventData={eventData}
        eventTranslateData={eventTranslateData}
        titleDictionary={titleDictionary} />
      <NewsHomeSection
        activeLocale={activeLocale}
        newsData={newsData}
        newsTranslateData={newsTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary}
      />
      <GallerySection
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary}
        galleryData={galleryData} />
      <CustomerSection
        titleDictionary={titleDictionary}
        customerData={customerData} />
      <PartnerSection
        titleDictionary={titleDictionary}
        partnerData={partnerData} />
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

export default HomePageLayout

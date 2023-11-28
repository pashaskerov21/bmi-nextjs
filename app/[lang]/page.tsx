import React, { Suspense } from 'react'
import { getTranslate } from '../../get-translate'
import { Locale, i18n } from '../../i18n-config'
import { AboutReportTranslateDataType, AboutReportDataType, AboutTranslateDataType, AboutDataType, BannerTranslateDataType, BannerDataType, CustomerDataType, EventTranslateDataType, EventDataType, GalleryDataType, NewsTranslateDataType, NewsDataType, PartnerDataType, ReportTranslateDataType, ReportDataType, TrainerTranslateDataType, TrainerDataType, TrainingCategoryTranslateDataType, TrainingCategoryDataType, TrainingTranslateDataType, TrainingDataType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchBanner, fetchBannerTranslate, fetchCustomer, fetchEvent, fetchEventTranslate, fetchGallery, fetchNews, fetchNewsTranslate, fetchPartner, fetchReport, fetchReportTranslate, fetchTrainer, fetchTrainerTranslate, fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils'
import { notFound, redirect } from 'next/navigation'
import { HomePageLayout } from '@/src/layout'

const HomePage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const [
    bannerData,
    bannerTranslateData,
    reportData,
    reportTranslateData,
    aboutData,
    aboutTranslateData,
    aboutReportData,
    aboutReportTranslateData,
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    eventData,
    eventTranslateData,
    newsData,
    newsTranslateData,
    galleryData,
    customerData,
    partnerData]:
    [
      BannerDataType[] | undefined,
      BannerTranslateDataType[] | undefined,
      ReportDataType[] | undefined,
      ReportTranslateDataType[] | undefined,
      AboutDataType[] | undefined,
      AboutTranslateDataType[] | undefined,
      AboutReportDataType[] | undefined,
      AboutReportTranslateDataType[] | undefined,
      TrainingCategoryDataType[] | undefined,
      TrainingCategoryTranslateDataType[] | undefined,
      TrainingDataType[] | undefined,
      TrainingTranslateDataType[] | undefined,
      TrainerDataType[] | undefined,
      TrainerTranslateDataType[] | undefined,
      EventDataType[] | undefined,
      EventTranslateDataType[] | undefined,
      NewsDataType[] | undefined,
      NewsTranslateDataType[] | undefined,
      GalleryDataType[] | undefined,
      CustomerDataType[] | undefined,
      PartnerDataType[] | undefined] = await Promise.all(
        [
          fetchBanner(),
          fetchBannerTranslate(),
          fetchReport(),
          fetchReportTranslate(),
          fetchAbout(),
          fetchAboutTranslate(),
          fetchAboutReport(),
          fetchAboutReportTranslate(),
          fetchTrainingCategory(),
          fetchTrainingCategoryTranslate(),
          fetchTraining(),
          fetchTrainingTranslate(),
          fetchTrainer(),
          fetchTrainerTranslate(),
          fetchEvent(),
          fetchEventTranslate(),
          fetchNews(),
          fetchNewsTranslate(),
          fetchGallery(),
          fetchCustomer(),
          fetchPartner()]);

  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  const formDictionary = t.form;

  if (!i18n.locales.includes(lang)) {
    notFound();
  }
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        {
          (
            aboutData
            && aboutReportData
            && aboutReportTranslateData
            && aboutTranslateData
            && bannerData
            && bannerTranslateData
            && customerData
            && eventData
            && eventTranslateData
            && galleryData
            && newsData
            && newsTranslateData
            && partnerData
            && reportData
            && reportTranslateData
            && trainerData
            && trainerTranslateData
            && trainingCategoryData
            && trainingCategoryTranslateData
            && trainingData
            && trainingTranslateData
          ) ? (
            <HomePageLayout
              aboutData={aboutData[0]}
              aboutReportData={aboutReportData}
              aboutReportTranslateData={aboutReportTranslateData}
              aboutTranslateData={aboutTranslateData}
              activeLocale={lang}
              bannerData={bannerData}
              bannerTranslateData={bannerTranslateData}
              buttonDictionary={buttonDictionary}
              customerData={customerData}
              eventData={eventData}
              eventTranslateData={eventTranslateData}
              formDictionary={formDictionary}
              galleryData={galleryData}
              newsData={newsData}
              newsTranslateData={newsTranslateData}
              partnerData={partnerData}
              reportData={reportData}
              reportTranslateData={reportTranslateData}
              titleDictionary={titleDictionary}
              trainerData={trainerData}
              trainerTranslateData={trainerTranslateData}
              trainingCategoryData={trainingCategoryData}
              trainingCategoryTranslateData={trainingCategoryTranslateData}
              trainingData={trainingData}
              trainingTranslateData={trainingTranslateData}
            />
          ) : redirect(`/${lang}/404`)
        }
      </Suspense>
    </React.Fragment>
  )
}


export default HomePage
import React, { Suspense } from 'react'
import { getTranslate } from '../../get-translate'
import { Locale, i18n } from '../../i18n-config'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType, BannerTranslateType, BannerType, ReportTranslateType, ReportType, TrainerTranslateType, TrainerType, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchBanner, fetchBannerTranslate, fetchReport, fetchReportTranslate, fetchTrainer, fetchTrainerTranslate, fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils'
import { AboutHomeSection, BannerSection, ReportSection, TrainerHomeSection, TrainingHomeSection } from '@/src/sections'
import { notFound } from 'next/navigation'

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
    trainerTranslateData]:
    [
      BannerType[] | undefined,
      BannerTranslateType[] | undefined,
      ReportType[] | undefined,
      ReportTranslateType[] | undefined,
      AboutType[] | undefined,
      AboutTranslateType[] | undefined,
      AboutReportType[] | undefined,
      AboutReportTranslateType[] | undefined,
      TrainingCategoryType[] | undefined,
      TrainingCategoryTranslateType[] | undefined,
      TrainingType[] | undefined,
      TrainingTranslateType[] | undefined,
      TrainerType[] | undefined,
      TrainerTranslateType[] | undefined] = await Promise.all(
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
          fetchTrainerTranslate()]);

  const t = await getTranslate(lang);
  const buttonDictionary = t.button;
  const titleDictionary = t.title;

  if (!i18n.locales.includes(lang)) {
    notFound();
  }
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        {(bannerData && bannerTranslateData) ? (
          <BannerSection
            activeLocale={lang}
            bannerData={bannerData}
            bannerTranslateData={bannerTranslateData}
            buttonDictionary={buttonDictionary} />
        ) : null}
        {(reportData && reportTranslateData) ? (
          <ReportSection
            activeLocale={lang}
            reportData={reportData}
            reportTranslateData={reportTranslateData} />
        ) : null}
        {(aboutData && aboutTranslateData && aboutReportData && aboutReportTranslateData) ? (
          <AboutHomeSection
            activeLocale={lang}
            aboutData={aboutData[0]}
            aboutTranslateData={aboutTranslateData}
            aboutReportData={aboutReportData}
            aboutReportTranslateData={aboutReportTranslateData}
            titleDictionary={titleDictionary}
            buttonDictionary={buttonDictionary} />
        ) : null}
        {(trainingCategoryData && trainingCategoryTranslateData && trainingData && trainingTranslateData) ? (
          <TrainingHomeSection
            activeLocale={lang}
            trainingCategoryData={trainingCategoryData}
            trainingCategoryTranslateData={trainingCategoryTranslateData}
            trainingData={trainingData}
            trainingTranslateData={trainingTranslateData}
            titleDictionary={titleDictionary}
            buttonDictionary={buttonDictionary} />
        ) : null}
        {(trainerData && trainerTranslateData) ? (
          <TrainerHomeSection
            activeLocale={lang}
            trainerData={trainerData}
            trainerTranslateData={trainerTranslateData}
            titleDictionary={titleDictionary} />
        ) : null}
      </Suspense>
    </React.Fragment>
  )
}


export default HomePage
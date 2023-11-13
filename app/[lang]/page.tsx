import React, { Suspense } from 'react'
import { getTranslate } from '../../get-translate'
import { Locale } from '../../i18n-config'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType, BannerTranslateType, BannerType, ReportTranslateType, ReportType, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchBanner, fetchBannerTranslate, fetchReport, fetchReportTranslate, fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils'
import { AboutHomeSection, BannerSection, ReportSection, TrainingHomeSection } from '@/src/sections'

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
    trainingTranslateData]:
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
      TrainingTranslateType[] | undefined] = await Promise.all(
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
          fetchTrainingTranslate()]);

  const t = await getTranslate(lang);
  const buttonDictionary = t.button;
  const titleDictionary = t.title;

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
      </Suspense>
    </React.Fragment>
  )
}


export default HomePage
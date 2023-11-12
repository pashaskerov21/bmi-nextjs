import React, { Suspense } from 'react'
import { getTranslate } from '../../get-translate'
import { Locale } from '../../i18n-config'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType, BannerTranslateType, BannerType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchBanner, fetchBannerTranslate } from '@/src/utils'
import { BannerSection } from '@/src/sections'

const HomePage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const [bannerData, bannerTranslateData, aboutData, aboutTranslateData, aboutReportData, aboutReportTranslateData]: 
  [BannerType[] | undefined, BannerTranslateType[] | undefined, AboutType[] | undefined, AboutTranslateType[] | undefined, AboutReportType[] | undefined, AboutReportTranslateType[] | undefined] = await Promise.all(
    [fetchBanner(), fetchBannerTranslate(), fetchAbout(), fetchAboutTranslate(), fetchAboutReport(), fetchAboutReportTranslate()]);

  const t = await getTranslate(lang)
  const buttonDictionary = t.button;

  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        {(bannerData && bannerTranslateData) ? (
          <BannerSection activeLocale={lang} bannerData={bannerData} bannerTranslateData={bannerTranslateData} buttonDictionary={buttonDictionary}/>
        ) : null}
        {(aboutData && aboutTranslateData && aboutReportData && aboutReportTranslateData) ? 'about' : null}
      </Suspense>
    </React.Fragment>
  )
}


export default HomePage
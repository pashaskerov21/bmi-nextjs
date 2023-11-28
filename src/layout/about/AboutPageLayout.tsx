'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { AboutLayoutType, LocaleStateType } from '@/src/types';
import { useDispatch } from 'react-redux';
import { AboutPageSection, CustomerSection, GallerySection, PartnerSection, ReportSection } from '@/src/sections';

const AboutPageLayout: React.FC<AboutLayoutType> = ({
  aboutData,
  aboutReportData,
  aboutReportTranslateData,
  aboutTranslateData,
  activeLocale,
  buttonDictionary,
  customerData,
  galleryData,
  partnerData,
  reportData,
  reportTranslateData,
  titleDictionary,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = [
    {
      locale: 'az',
      slug: 'about'
    },
    {
      locale: 'en',
      slug: 'about',
    }
  ]
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <AboutPageSection
        activeLocale={activeLocale}
        aboutData={aboutData}
        aboutTranslateData={aboutTranslateData}
        aboutReportData={aboutReportData}
        aboutReportTranslateData={aboutReportTranslateData}
        titleDictionary={titleDictionary}
        buttonDictionary={buttonDictionary} />
      <ReportSection
        activeLocale={activeLocale}
        reportData={reportData}
        reportTranslateData={reportTranslateData} />
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
    </React.Fragment>
  )
}

export default AboutPageLayout

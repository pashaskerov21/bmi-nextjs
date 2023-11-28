import React, { Suspense } from 'react'
import { Metadata } from 'next'
import { Locale } from '../../../i18n-config'
import { AboutPageLayout } from '@/src/layout'
import { getTranslate } from '../../../get-translate'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchCustomer, fetchGallery, fetchPartner, fetchReport, fetchReportTranslate } from '@/src/utils'
import { AboutDataType, AboutReportDataType, AboutReportTranslateDataType, AboutTranslateDataType, CustomerDataType, GalleryDataType, PartnerDataType, ReportDataType, ReportTranslateDataType } from '@/src/types'
import { redirect } from 'next/navigation'


export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.about_us}`;
    return {
        title: pageTitle,
    }
}

const AboutPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {

    const [
        reportData,
        reportTranslateData,
        aboutData,
        aboutTranslateData,
        aboutReportData,
        aboutReportTranslateData,
        galleryData,
        customerData,
        partnerData]:
        [
            ReportDataType[] | undefined,
            ReportTranslateDataType[] | undefined,
            AboutDataType[] | undefined,
            AboutTranslateDataType[] | undefined,
            AboutReportDataType[] | undefined,
            AboutReportTranslateDataType[] | undefined,
            GalleryDataType[] | undefined,
            CustomerDataType[] | undefined,
            PartnerDataType[] | undefined] = await Promise.all(
                [
                    fetchReport(),
                    fetchReportTranslate(),
                    fetchAbout(),
                    fetchAboutTranslate(),
                    fetchAboutReport(),
                    fetchAboutReportTranslate(),
                    fetchGallery(),
                    fetchCustomer(),
                    fetchPartner()]);

    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {
                    (
                        aboutData
                        && aboutReportData
                        && aboutReportTranslateData
                        && aboutTranslateData
                        && customerData
                        && galleryData
                        && partnerData
                        && reportData
                        && reportTranslateData
                    ) ? (
                        <AboutPageLayout
                            aboutData={aboutData[0]}
                            aboutReportData={aboutReportData}
                            aboutReportTranslateData={aboutReportTranslateData}
                            aboutTranslateData={aboutTranslateData}
                            activeLocale={lang}
                            buttonDictionary={buttonDictionary}
                            customerData={customerData}
                            galleryData={galleryData}
                            partnerData={partnerData}
                            reportData={reportData}
                            reportTranslateData={reportTranslateData}
                            titleDictionary={titleDictionary}
                        />
                    ) : redirect(`/${lang}/404`)
                }
            </Suspense>
        </React.Fragment>
    )
}

export default AboutPage

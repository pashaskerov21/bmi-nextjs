import React, { Suspense } from 'react'
import { Locale } from '../../../i18n-config'
import { getTranslate } from '../../../get-translate'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType, CustomerType, GalleryType, PartnerType, ReportTranslateType, ReportType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchCustomer, fetchGallery, fetchPartner, fetchReport, fetchReportTranslate } from '@/src/utils'
import { AboutPageSection, CustomerSection, GallerySection, PartnerSection, ReportSection } from '@/src/sections'
import { Metadata } from 'next'
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
            ReportType[] | undefined,
            ReportTranslateType[] | undefined,
            AboutType[] | undefined,
            AboutTranslateType[] | undefined,
            AboutReportType[] | undefined,
            AboutReportTranslateType[] | undefined,
            GalleryType[] | undefined,
            CustomerType[] | undefined,
            PartnerType[] | undefined] = await Promise.all(
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
                {(aboutData && aboutTranslateData && aboutReportData && aboutReportTranslateData) ? (
                    <AboutPageSection
                        activeLocale={lang}
                        aboutData={aboutData[0]}
                        aboutTranslateData={aboutTranslateData}
                        aboutReportData={aboutReportData}
                        aboutReportTranslateData={aboutReportTranslateData}
                        titleDictionary={titleDictionary} />
                ) : redirect(`/${lang}/404`)}
                {(reportData && reportTranslateData) ? (
                    <ReportSection
                        activeLocale={lang}
                        reportData={reportData}
                        reportTranslateData={reportTranslateData} />
                ) : null}
                {galleryData ? (
                    <GallerySection
                        titleDictionary={titleDictionary}
                        buttonDictionary={buttonDictionary}
                        galleryData={galleryData} />
                ) : null}
                {
                    customerData ? (
                        <CustomerSection
                            titleDictionary={titleDictionary}
                            customerData={customerData} />
                    ) : null
                }
                {
                    partnerData ? (
                        <PartnerSection
                            titleDictionary={titleDictionary}
                            partnerData={partnerData} />
                    ) : null
                }
            </Suspense>
        </React.Fragment>
    )
}

export default AboutPage

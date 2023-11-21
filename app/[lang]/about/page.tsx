import React, { Suspense } from 'react'
import { Locale } from '../../../i18n-config'
import { getTranslate } from '../../../get-translate'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType, ReportTranslateType, ReportType } from '@/src/types'
import { fetchAbout, fetchAboutReport, fetchAboutReportTranslate, fetchAboutTranslate, fetchReport, fetchReportTranslate } from '@/src/utils'
import { AboutPageSection, ReportSection } from '@/src/sections'
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'


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
        aboutReportTranslateData]:
        [
            ReportType[] | undefined,
            ReportTranslateType[] | undefined,
            AboutType[] | undefined,
            AboutTranslateType[] | undefined,
            AboutReportType[] | undefined,
            AboutReportTranslateType[] | undefined] = await Promise.all(
                [
                    fetchReport(),
                    fetchReportTranslate(),
                    fetchAbout(),
                    fetchAboutTranslate(),
                    fetchAboutReport(),
                    fetchAboutReportTranslate()]);

    const t = await getTranslate(lang);
    const titleDictionary = t.title;
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
                ) : redirect('/404')}
                {(reportData && reportTranslateData) ? (
                    <ReportSection
                        activeLocale={lang}
                        reportData={reportData}
                        reportTranslateData={reportTranslateData} />
                )  : redirect('/404')}
            </Suspense>
        </React.Fragment>
    )
}

export default AboutPage

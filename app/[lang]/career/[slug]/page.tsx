import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale, i18n } from '@/i18n-config';
import { VacancySection } from '@/src/sections';
import { CareerDataType, CareerTranslateDataType } from '@/src/types';
import { fetchCareer, fetchCareerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { VacancyPageLayout } from '@/src/layout';

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const careerSlug = decodeURIComponent(slug);
    const careerTranslateData: CareerTranslateDataType[] | undefined = await fetchCareerTranslate();
    if (careerTranslateData) {
        const requiredTranslate: CareerTranslateDataType | undefined = careerTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === careerSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const pageTitle = `${titleDictionary.career} | ${result}`
            return {
                title: pageTitle
            }
        } else {
            return {}
        }
    } else {
        return {}
    }
}


const CareerPage = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const formDictionary = t.form;
    const careerSlug = decodeURIComponent(slug);
    const [careerData, careerTranslateData]: [CareerDataType[] | undefined, CareerTranslateDataType[] | undefined] = await Promise.all([fetchCareer(), fetchCareerTranslate()]);
    if (careerData && careerTranslateData) {
        const activeTranslateData: CareerTranslateDataType | undefined = careerTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === careerSlug.toLocaleLowerCase());
        if (activeTranslateData) {
            const allTranslateData: CareerTranslateDataType[] | [] = careerTranslateData.filter((data) => data.career_id === activeTranslateData.career_id);
            const activeData: CareerDataType | undefined = careerData.find((data) => data.id === activeTranslateData.career_id);
            if (activeData && allTranslateData.length === i18n.locales.length) {
                return (
                    <React.Fragment>
                        <VacancyPageLayout
                            activeLocale={lang}
                            buttonDictionary={buttonDictionary}
                            activeData={activeData}
                            activeTranslateData={activeTranslateData}
                            allTranslateData={allTranslateData}
                            formDictionary={formDictionary}
                            titleDictionary={titleDictionary}
                        />
                    </React.Fragment>
                )
            } else {
                redirect(`/${lang}/career`);
            }
        } else {
            redirect(`/${lang}/career`);
        }
    } else {
        redirect(`/${lang}/404`);
    }
}

export default CareerPage

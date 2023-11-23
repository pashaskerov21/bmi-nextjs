import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { VacancySection } from '@/src/sections';
import { CareerTranslateType, CareerType } from '@/src/types';
import { fetchCareer, fetchCareerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const careerSlug = decodeURIComponent(slug);
    const careerTranslateData: CareerTranslateType[] | undefined = await fetchCareerTranslate();
    if (careerTranslateData) {
        const requiredTranslate: CareerTranslateType | undefined = careerTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === careerSlug);
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
    const [careerData, careerTranslateData]: [CareerType[] | undefined, CareerTranslateType[] | undefined] = await Promise.all([fetchCareer(), fetchCareerTranslate()]);
    if (careerData && careerTranslateData) {
        const requiredTranslateData: CareerTranslateType | undefined = careerTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === careerSlug.toLocaleLowerCase());
        if (requiredTranslateData) {
            const requiredData: CareerType | undefined = careerData.find((data) => data.id === requiredTranslateData.career_id);
            if (requiredData) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <VacancySection
                                activeLocale={lang}
                                titleDictionary={titleDictionary}
                                buttonDictionary={buttonDictionary}
                                formDictionary={formDictionary}
                                careerData={requiredData}
                                careerTranslateData={requiredTranslateData}
                            />
                        </Suspense>
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

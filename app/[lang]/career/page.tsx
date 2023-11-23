import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { CareerSection } from '@/src/sections';
import { CareerTranslateType, CareerType } from '@/src/types';
import { fetchCareer, fetchCareerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.career}`;
    return {
        title: pageTitle,
    }
}


const CareerPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const [careerData, careerTranslateData]: [CareerType[] | undefined, CareerTranslateType[] | undefined] = await Promise.all([fetchCareer(), fetchCareerTranslate()]);
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {
                    (careerData && careerTranslateData) ? (
                        <CareerSection
                            activeLocale={lang}
                            titleDictionary={titleDictionary}
                            buttonDictionary={buttonDictionary}
                            careerData={careerData}
                            careerTranslateData={careerTranslateData} />
                    ) : redirect(`/${lang}/404`)
                }
            </Suspense>
        </React.Fragment>
    )
}

export default CareerPage

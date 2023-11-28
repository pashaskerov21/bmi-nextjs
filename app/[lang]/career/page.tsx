import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { CareerSection } from '@/src/sections';
import { fetchCareer, fetchCareerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { CareerDataType, CareerTranslateDataType } from '@/src/types';
import { CareerPageLayout } from '@/src/layout';

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
    const [careerData, careerTranslateData]: [CareerDataType[] | undefined, CareerTranslateDataType[] | undefined] = await Promise.all([fetchCareer(), fetchCareerTranslate()]);
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {
                    (careerData && careerTranslateData) ? (
                        <CareerPageLayout
                            activeLocale={lang}
                            buttonDictionary={buttonDictionary}
                            careerData={careerData}
                            careerTranslateData={careerTranslateData}
                            titleDictionary={titleDictionary}
                        />
                    ) : redirect(`/${lang}/404`)
                }
            </Suspense>
        </React.Fragment>
    )
}

export default CareerPage

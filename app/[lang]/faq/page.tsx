import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { FaqSection } from '@/src/sections';
import { FaqTranslateType, FaqType } from '@/src/types';
import { fetchFaq, fetchFaqTranslate } from '@/src/utils';
import { Metadata } from 'next';
import React, { Suspense } from 'react'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.faq}`;
    return {
        title: pageTitle,
    }
}

const FaqPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const [faqData, faqTranslateData]: [FaqType[] | undefined, FaqTranslateType[] | undefined] = await Promise.all([fetchFaq(), fetchFaqTranslate()]);
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {
                    (faqData && faqTranslateData) ? (
                        <FaqSection
                            activeLocale={lang}
                            titleDictionary={titleDictionary}
                            faqData={faqData}
                            faqTranslateData={faqTranslateData}
                        />
                    ) : null
                }
            </Suspense>
        </React.Fragment>
    )
}

export default FaqPage

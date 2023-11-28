import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { FaqPageLayout } from '@/src/layout';
import { FaqDataType, FaqTranslateDataType } from '@/src/types';
import { fetchFaq, fetchFaqTranslate } from '@/src/utils';
import { Metadata } from 'next';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.faq}`;
    return {
        title: pageTitle,
    }
}

const FaqPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const [faqData, faqTranslateData]: [FaqDataType[] | undefined, FaqTranslateDataType[] | undefined] = await Promise.all([fetchFaq(), fetchFaqTranslate()]);
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {
                    (faqData && faqTranslateData) ? (
                        <FaqPageLayout
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

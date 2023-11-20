import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { NewsTranslateType, NewsType } from '@/src/types';
import { fetchNews, fetchNewsTranslate } from '@/src/utils';
import { Metadata } from 'next';
import React, { Suspense } from 'react'
import { redirect } from 'next/navigation';
import { NewsPageSection } from '@/src/sections';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const newsTitle = `BMI | ${titleDictionary.news}`;
    return {
        title: newsTitle,
    }
}

const NewsPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const [newsData, newsTranslateData]: [NewsType[] | undefined, NewsTranslateType[] | undefined] = await Promise.all([fetchNews(), fetchNewsTranslate()])
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(newsData && newsTranslateData) ? (
                    <React.Fragment>
                        <NewsPageSection
                            activeLocale={lang}
                            newsData={newsData}
                            newsTranslateData={newsTranslateData}
                            titleDictionary={titleDictionary}
                            buttonDictionary={buttonDictionary} />
                    </React.Fragment>
                ) : redirect(`${lang}/404`)}
            </Suspense>
        </React.Fragment>
    )
}

export default NewsPage

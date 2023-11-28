import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { fetchNews, fetchNewsTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { NewsPageSection } from '@/src/sections';
import { NewsDataType, NewsTranslateDataType } from '@/src/types';
import { NewsPagaLayout } from '@/src/layout';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.news}`;
    return {
        title: pageTitle,
    }
}

const NewsPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const [
        newsData,
        newsTranslateData]: [
            NewsDataType[] | undefined,
            NewsTranslateDataType[] | undefined] = await Promise.all([
                fetchNews(),
                fetchNewsTranslate()]);
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(newsData && newsTranslateData) ? (
                    <React.Fragment>
                        <NewsPagaLayout
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

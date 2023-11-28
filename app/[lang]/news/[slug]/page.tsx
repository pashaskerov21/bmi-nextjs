import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale, i18n } from '@/i18n-config';
import { NewsInnerPageLayout } from '@/src/layout';
import { NewsDataType, NewsTranslateDataType } from '@/src/types';
import { fetchNews, fetchNewsTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const newsSlug = decodeURIComponent(slug);
  const newsTranslateData: NewsTranslateDataType[] | undefined = await fetchNewsTranslate();
  if (newsTranslateData) {
    const requiredTranslate: NewsTranslateDataType | undefined = newsTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === newsSlug);
    if (requiredTranslate) {
      let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
      let result = firstLetter + requiredTranslate.title.slice(1);
      const pageTitle = `${titleDictionary.news} | ${result}`
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


const NewsInnerPage = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }) => {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  const newsSlug = decodeURIComponent(slug);

  const [
    newsData,
    newsTranslateData]: [
      NewsDataType[] | undefined,
      NewsTranslateDataType[] | undefined] = await Promise.all([
        fetchNews(),
        fetchNewsTranslate()]);
  if (newsData && newsTranslateData) {
    const activeTranslateData: NewsTranslateDataType | undefined = newsTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === newsSlug.toLocaleLowerCase());
    if (activeTranslateData) {
      const allTranslateData: NewsTranslateDataType[] | [] = newsTranslateData.filter((data) => data.news_id === activeTranslateData.news_id);
      const activeData: NewsDataType | undefined = newsData.find((data) => data.id === activeTranslateData.news_id);
      const otherNewsData: NewsDataType[] | [] = newsData.filter((data) => data.id !== activeTranslateData.news_id);
      const otherNewsTranslateData: NewsTranslateDataType[] | [] = newsTranslateData.filter((data) => data.news_id !== activeTranslateData.news_id);
      if (activeData && allTranslateData.length === i18n.locales.length) {
        return (
          <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
              <NewsInnerPageLayout
                activeData={activeData}
                activeLocale={lang}
                activeTranslateData={activeTranslateData}
                allTranslateData={allTranslateData}
                buttonDictionary={buttonDictionary}
                otherNewsData={otherNewsData}
                otherNewsTranslateData={otherNewsTranslateData}
                titleDictionary={titleDictionary}
              />
            </Suspense>
          </React.Fragment>
        )
      } else {
        redirect(`/${lang}/news`)
      }
    } else {
      redirect(`/${lang}/news`)
    }
  } else {
    redirect(`/${lang}/404`)
  }
}

export default NewsInnerPage

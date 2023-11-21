import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { NewsInnerSection, OtherNewsSection } from '@/src/sections';
import { NewsTranslateType, NewsType } from '@/src/types';
import { fetchNews, fetchNewsTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const newsSlug = decodeURIComponent(slug);
  const newsTranslateData: NewsTranslateType[] | undefined = await fetchNewsTranslate();
  if (newsTranslateData) {
    const requiredTranslate: NewsTranslateType | undefined = newsTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === newsSlug);
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
      NewsType[] | undefined,
      NewsTranslateType[] | undefined] = await Promise.all([
        fetchNews(),
        fetchNewsTranslate()]);
  if (newsData && newsTranslateData) {
    const requiredTranslate: NewsTranslateType | undefined = newsTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === newsSlug.toLocaleLowerCase());
    if (requiredTranslate) {
      const requiredData: NewsType | undefined = newsData.find((data) => data.id === requiredTranslate.news_id);
      const otherNewsData: NewsType[] | undefined = newsData.filter((data) => data.id !== requiredTranslate.news_id);
      const otherNewsTranslateData: NewsTranslateType[] | undefined = newsTranslateData.filter((data) => data.news_id !== requiredTranslate.news_id);
      if (requiredData) {
        return (
          <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
              <NewsInnerSection
                activeLocale={lang}
                newsData={requiredData}
                newsTranslateData={requiredTranslate}
                titleDictionary={titleDictionary} />
              {
                (otherNewsData && otherNewsTranslateData) ? (
                  <OtherNewsSection
                    activeLocale={lang}
                    newsData={otherNewsData}
                    newsTranslateData={otherNewsTranslateData}
                    titleDictionary={titleDictionary}
                    buttonDictionary={buttonDictionary} />
                ) : null
              }
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

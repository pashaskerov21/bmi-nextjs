import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { Metadata } from 'next';
import { SearchPageLayout } from '@/src/layout';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const pageTitle = `BMI | ${titleDictionary.search}`;
  return {
      title: pageTitle,
  }
}

const SearchPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        <SearchPageLayout
          activeLocale={lang}
          titleDictionary={titleDictionary}
          buttonDictionary={buttonDictionary} />
      </Suspense>
    </React.Fragment>
  )
}

export default SearchPage

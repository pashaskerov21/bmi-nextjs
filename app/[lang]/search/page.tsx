import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { SearchSection } from '@/src/sections';
import React, { Suspense } from 'react'

const SearchPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        <SearchSection activeLocale={lang} titleDictionary={titleDictionary} />
      </Suspense>
    </React.Fragment>
  )
}

export default SearchPage

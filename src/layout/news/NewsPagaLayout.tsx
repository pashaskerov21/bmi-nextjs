'use client'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { NewsPageSection } from '@/src/sections';
import { LocaleStateType, NewsPageLayoutType } from '@/src/types';
import React from 'react'
import { useDispatch } from 'react-redux';

const NewsPagaLayout: React.FC<NewsPageLayoutType> = ({
    activeLocale,
    buttonDictionary,
    newsData,
    newsTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'news'
        },
        {
            locale: 'en',
            slug: 'news',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <NewsPageSection
                activeLocale={activeLocale}
                newsData={newsData}
                newsTranslateData={newsTranslateData}
                titleDictionary={titleDictionary}
                buttonDictionary={buttonDictionary} />
        </React.Fragment>
    )
}

export default NewsPagaLayout

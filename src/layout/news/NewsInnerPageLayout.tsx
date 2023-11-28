'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { NewsInnerSection, OtherNewsSection } from '@/src/sections';
import { LocaleStateType, NewsInnerPageLayoutType } from '@/src/types'
import { useDispatch } from 'react-redux';

const NewsInnerPageLayout: React.FC<NewsInnerPageLayoutType> = ({
    activeData,
    activeLocale,
    activeTranslateData,
    allTranslateData,
    buttonDictionary,
    otherNewsData,
    otherNewsTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = allTranslateData.map((data) => {
        return {
            locale: data.lang,
            slug: `news/${encodeURIComponent(data.title.toLocaleLowerCase())}`
        }
    })
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <NewsInnerSection
                activeLocale={activeLocale}
                newsData={activeData}
                newsTranslateData={activeTranslateData}
                titleDictionary={titleDictionary} />
            {
                (otherNewsData.length > 0 && otherNewsTranslateData.length > 0) ? (
                    <OtherNewsSection
                        activeLocale={activeLocale}
                        newsData={otherNewsData}
                        newsTranslateData={otherNewsTranslateData}
                        titleDictionary={titleDictionary}
                        buttonDictionary={buttonDictionary} />
                ) : null
            }
        </React.Fragment>
    )
}

export default NewsInnerPageLayout

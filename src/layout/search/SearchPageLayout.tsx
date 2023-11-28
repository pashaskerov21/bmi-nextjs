"use client"
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { SearchSection } from '@/src/sections';
import { LocaleStateType, SearchPageLayoutType } from '@/src/types';
import React from 'react'
import { useDispatch } from 'react-redux';

const SearchPageLayout: React.FC<SearchPageLayoutType> = ({
    activeLocale,
    buttonDictionary,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'search'
        },
        {
            locale: 'en',
            slug: 'search',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <SearchSection
                activeLocale={activeLocale}
                titleDictionary={titleDictionary}
                buttonDictionary={buttonDictionary} />
        </React.Fragment>
    )
}

export default SearchPageLayout

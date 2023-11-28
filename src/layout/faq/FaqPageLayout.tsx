'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { FaqPageLayoutType, LocaleStateType } from '@/src/types';
import { useDispatch } from 'react-redux';
import { FaqSection } from '@/src/sections';

const FaqPageLayout: React.FC<FaqPageLayoutType> = ({
    activeLocale,
    faqData,
    faqTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'faq'
        },
        {
            locale: 'en',
            slug: 'faq',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <FaqSection
                activeLocale={activeLocale}
                titleDictionary={titleDictionary}
                faqData={faqData}
                faqTranslateData={faqTranslateData}
            />
        </React.Fragment>
    )
}

export default FaqPageLayout

'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { CareerSection } from '@/src/sections'
import { CareerPageLayoutType, LocaleStateType } from '@/src/types'
import { useDispatch } from 'react-redux';

const CareerPageLayout: React.FC<CareerPageLayoutType> = ({
    activeLocale,
    buttonDictionary,
    careerData,
    careerTranslateData,
    titleDictionary
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'career'
        },
        {
            locale: 'en',
            slug: 'career',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <CareerSection
                activeLocale={activeLocale}
                titleDictionary={titleDictionary}
                buttonDictionary={buttonDictionary}
                careerData={careerData}
                careerTranslateData={careerTranslateData} />
        </React.Fragment>
    )
}

export default CareerPageLayout

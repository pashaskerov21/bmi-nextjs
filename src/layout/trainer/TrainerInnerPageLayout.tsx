"use client"
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { TrainerInnerSection } from '@/src/sections';
import { LocaleStateType } from '@/src/types';
import { TrainerInnerPageLayoutType } from '@/src/types/layout'
import { useDispatch } from 'react-redux';

const TrainerInnerPageLayout: React.FC<TrainerInnerPageLayoutType> = ({
    activeData,
    activeLocale,
    activeTranslateData,
    allTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = allTranslateData.map((data) => {
        return {
            locale: data.lang,
            slug: `trainers/${encodeURIComponent(data.name.toLocaleLowerCase())}`
        }
    })
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <TrainerInnerSection
                activeLocale={activeLocale}
                trainerData={activeData}
                translateData={activeTranslateData}
                titleDictionary={titleDictionary} />
        </React.Fragment>
    )
}

export default TrainerInnerPageLayout

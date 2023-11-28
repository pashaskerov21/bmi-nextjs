"use client"
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { TrainersPageSection } from '@/src/sections';
import { LocaleStateType, TrainerPageLayoutType } from '@/src/types';
import React from 'react'
import { useDispatch } from 'react-redux';

const TrainerPageLayout: React.FC<TrainerPageLayoutType> = ({
    activeLocale,
    titleDictionary,
    trainerData,
    trainerTranslateData,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'trainers'
        },
        {
            locale: 'en',
            slug: 'trainers',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <TrainersPageSection
                activeLocale={activeLocale}
                trainerData={trainerData}
                trainerTranslateData={trainerTranslateData}
                titleDictionary={titleDictionary} />
        </React.Fragment>
    )
}

export default TrainerPageLayout

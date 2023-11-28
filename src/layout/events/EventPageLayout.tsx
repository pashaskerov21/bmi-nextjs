'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { EventsPageSection } from '@/src/sections';
import { EventPageLayoutType, LocaleStateType } from '@/src/types';
import { useDispatch } from 'react-redux';

const EventPageLayout: React.FC<EventPageLayoutType> = ({
    activeLocale,
    eventData,
    eventTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'events'
        },
        {
            locale: 'en',
            slug: 'events',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <EventsPageSection
                activeLocale={activeLocale}
                eventData={eventData}
                eventTranslateData={eventTranslateData}
                titleDictionary={titleDictionary} />
        </React.Fragment>
    )
}

export default EventPageLayout

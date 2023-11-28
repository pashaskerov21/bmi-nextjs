import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { EventPageLayout } from '@/src/layout';
import { EventDataType, EventTranslateDataType } from '@/src/types';
import { fetchEvent, fetchEventTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.events}`;
    return {
        title: pageTitle,
    }
}

const EventsPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const [
        eventData,
        eventTranslateData]: [
            EventDataType[] | undefined,
            EventTranslateDataType[] | undefined] = await Promise.all([
                fetchEvent(),
                fetchEventTranslate(),
            ]);
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(eventData && eventTranslateData) ? (
                    <EventPageLayout
                        activeLocale={lang}
                        eventData={eventData}
                        eventTranslateData={eventTranslateData}
                        titleDictionary={titleDictionary} />
                ) : redirect(`/${lang}/404`)}
            </Suspense>
        </React.Fragment>
    )
}

export default EventsPage

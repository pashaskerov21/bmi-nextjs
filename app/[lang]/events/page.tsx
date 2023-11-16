import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { EventsPageSection } from '@/src/sections';
import { EventTranslateType, EventType } from '@/src/types';
import { fetchEvent, fetchEventTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const eventsTitle = `BMI | ${titleDictionary.events}`;
    return {
        title: eventsTitle,
    }
}

const EventsPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const [
        eventData,
        eventTranslateData]: [
            EventType[] | undefined,
            EventTranslateType[] | undefined] = await Promise.all([
                fetchEvent(),
                fetchEventTranslate(),
            ]);
  return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(eventData && eventTranslateData) ? (
                    <EventsPageSection activeLocale={lang} eventData={eventData} eventTranslateData={eventTranslateData} titleDictionary={titleDictionary}/>
                ) : redirect(`/${lang}/404`)}
            </Suspense>
        </React.Fragment>
    )
}

export default EventsPage

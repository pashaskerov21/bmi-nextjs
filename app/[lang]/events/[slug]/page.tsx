import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { EventInnerSection, OtherEventSection } from '@/src/sections';
import { EventGalleryType, EventTranslateType, EventType } from '@/src/types';
import { fetchEvent, fetchEventGallery, fetchEventTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const eventSlug = decodeURIComponent(slug);
    const eventTranslateData: EventTranslateType[] | undefined = await fetchEventTranslate();
    if (eventTranslateData) {
        const requiredTranslate: EventTranslateType | undefined = eventTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === eventSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const trainerTitle = `${titleDictionary.events} | ${result}`
            return {
                title: trainerTitle
            }
        } else {
            return {}
        }
    } else {
        return {}
    }
}

const EventInnerPage = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const eventSlug = decodeURIComponent(slug);
    const buttonDictionary = t.button;
    const [
        eventData,
        eventTranslateData,
        eventGalleryData]: [
            EventType[] | undefined,
            EventTranslateType[] | undefined,
            EventGalleryType[] | undefined] = await Promise.all([
                fetchEvent(),
                fetchEventTranslate(),
                fetchEventGallery(),
            ]);
    if (eventData && eventTranslateData && eventGalleryData) {
        const requiredTranslateData: EventTranslateType | undefined = eventTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === eventSlug);
        if (requiredTranslateData) {
            const requiredData: EventType | undefined = eventData.find((data) => data.id === requiredTranslateData.event_id);
            const filteredGalleryData: EventGalleryType[] = eventGalleryData.filter((data) => data.event_id === requiredTranslateData.event_id);
            const otherEventData: EventType[] = eventData.filter((data) => data.id !== requiredTranslateData.event_id);
            const otherEventDataTranslate: EventTranslateType[] = eventTranslateData.filter((data) => data.event_id !== requiredTranslateData.event_id)
            if (requiredData) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <EventInnerSection
                                activeLocale={lang}
                                eventData={requiredData}
                                eventTranslateData={requiredTranslateData}
                                titleDictionary={titleDictionary}
                                filteredGalleryData={filteredGalleryData} />
                            <OtherEventSection
                                activeLocale={lang} 
                                eventData={otherEventData}
                                eventTranslateData={otherEventDataTranslate}
                                titleDictionary={titleDictionary}
                                buttonDictionary={buttonDictionary}/>
                        </Suspense>
                    </React.Fragment>
                )
            } else {
                redirect(`/${lang}/events`)
            }
        } else {
            redirect(`/${lang}/events`)
        }
    } else {
        redirect(`/${lang}/404`)
    }
}

export default EventInnerPage

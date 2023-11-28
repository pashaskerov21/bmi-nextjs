import { getTranslate } from '@/get-translate';
import { Locale, i18n } from '@/i18n-config';
import { EventInnerPageLayout } from '@/src/layout';
import { EventInnerSection, OtherEventSection } from '@/src/sections';
import { EventDataType, EventGalleryDataType, EventTranslateDataType } from '@/src/types';
import { fetchEvent, fetchEventGallery, fetchEventTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const eventSlug = decodeURIComponent(slug);
    const eventTranslateData: EventTranslateDataType[] | undefined = await fetchEventTranslate();
    if (eventTranslateData) {
        const requiredTranslate: EventTranslateDataType | undefined = eventTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === eventSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const pageTitle = `${titleDictionary.events} | ${result}`
            return {
                title: pageTitle
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
            EventDataType[] | undefined,
            EventTranslateDataType[] | undefined,
            EventGalleryDataType[] | undefined] = await Promise.all([
                fetchEvent(),
                fetchEventTranslate(),
                fetchEventGallery(),
            ]);
    if (eventData && eventTranslateData && eventGalleryData) {
        const activeTranslateData: EventTranslateDataType | undefined = eventTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === eventSlug);
        if (activeTranslateData) {
            const activeData: EventDataType | undefined = eventData.find((data) => data.id === activeTranslateData.event_id);
            const allTranslateData: EventTranslateDataType[] | [] = eventTranslateData.filter((data) => data.event_id === activeTranslateData.event_id);
            const filteredGalleryData: EventGalleryDataType[] | [] = eventGalleryData.filter((data) => data.event_id === activeTranslateData.event_id);
            const otherEventData: EventDataType[] | [] = eventData.filter((data) => data.id !== activeTranslateData.event_id);
            const otherEventTranslateData: EventTranslateDataType[] | [] = eventTranslateData.filter((data) => data.event_id !== activeTranslateData.event_id)
            if (activeData && allTranslateData.length === i18n.locales.length) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <EventInnerPageLayout
                                activeData={activeData}
                                activeLocale={lang}
                                activeTranslateData={activeTranslateData}
                                allTranslateData={allTranslateData}
                                buttonDictionary={buttonDictionary}
                                filteredGalleryData={filteredGalleryData}
                                otherEventData={otherEventData}
                                otherEventTranslateData={otherEventTranslateData}
                                titleDictionary={titleDictionary}

                            />
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

'use client'
import React from 'react'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { EventInnerSection, OtherEventSection } from '@/src/sections';
import { EventInnerPageLayoutType, LocaleStateType } from '@/src/types'
import { useDispatch } from 'react-redux';

const EventInnerPageLayout: React.FC<EventInnerPageLayoutType> = ({
  activeData,
  activeLocale,
  activeTranslateData,
  allTranslateData,
  buttonDictionary,
  filteredGalleryData,
  titleDictionary,
  otherEventData,
  otherEventTranslateData,
}) => {
  const dispatch = useDispatch();
  const localeSlugs: LocaleStateType[] = allTranslateData.map((data) => {
    return {
      locale: data.lang,
      slug: `events/${encodeURIComponent(data.title.toLocaleLowerCase())}`
    }
  })
  React.useEffect(() => {
    dispatch(updateLocaleSlug(localeSlugs))
  }, [dispatch])
  return (
    <React.Fragment>
      <EventInnerSection
        activeLocale={activeLocale}
        eventData={activeData}
        eventTranslateData={activeTranslateData}
        titleDictionary={titleDictionary}
        filteredGalleryData={filteredGalleryData} />
      {
        (otherEventData.length > 0 && otherEventTranslateData.length > 0) ? (
          <OtherEventSection
            activeLocale={activeLocale}
            eventData={otherEventData}
            eventTranslateData={otherEventTranslateData}
            titleDictionary={titleDictionary}
            buttonDictionary={buttonDictionary} />
        ) : null
      }
    </React.Fragment>
  )
}

export default EventInnerPageLayout

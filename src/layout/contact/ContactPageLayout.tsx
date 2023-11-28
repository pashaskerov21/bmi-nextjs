'use client'
import { updateLocaleSlug } from '@/src/redux/actions/LocaleAction';
import { ContactSection } from '@/src/sections';
import { ContactPageLayoutType, LocaleStateType } from '@/src/types';
import React from 'react'
import { useDispatch } from 'react-redux';

const ContactPageLayout: React.FC<ContactPageLayoutType> = ({
    activeLocale,
    buttonDictionary,
    formDictionary,
    settingData,
    settingTranslateData,
    titleDictionary,
}) => {
    const dispatch = useDispatch();
    const localeSlugs: LocaleStateType[] = [
        {
            locale: 'az',
            slug: 'contact'
        },
        {
            locale: 'en',
            slug: 'contact',
        }
    ]
    React.useEffect(() => {
        dispatch(updateLocaleSlug(localeSlugs))
    }, [dispatch])
    return (
        <React.Fragment>
            <ContactSection
                activeLocale={activeLocale}
                titleDictionary={titleDictionary}
                buttonDictionary={buttonDictionary}
                formDictionary={formDictionary}
                settingData={settingData}
                settingTranslateData={settingTranslateData}
            />
        </React.Fragment>
    )
}

export default ContactPageLayout

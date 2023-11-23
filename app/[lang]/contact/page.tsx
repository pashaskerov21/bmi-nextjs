import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { ContactSection } from '@/src/sections';
import { SettingTranslateType, SettingType } from '@/src/types';
import { fetchSetting, fetchSettingTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.contact_us}`;
    return {
        title: pageTitle,
    }
}

const ContactPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const formDictionary = t.form;
    const [settingData, settingTranslateData]: [SettingType[] | undefined, SettingTranslateType[] | undefined] = await Promise.all([fetchSetting(), fetchSettingTranslate()])
    if (settingData && settingTranslateData) {
        const requiredSettingTranslate: SettingTranslateType | undefined = settingTranslateData.find((data) => data.lang === lang && data.setting_id === settingData[0].id);
        if (requiredSettingTranslate) {
            return (
                <React.Fragment>
                    <Suspense fallback={<div className='preloader'></div>}>
                        <ContactSection
                            activeLocale={lang}
                            titleDictionary={titleDictionary}
                            buttonDictionary={buttonDictionary}
                            formDictionary={formDictionary}
                            settingData={settingData[0]}
                            settingTranslateData={requiredSettingTranslate}
                        />
                    </Suspense>
                </React.Fragment>
            )
        } else {
            redirect(`/${lang}/404`)
        }
    } else {
        redirect(`/${lang}/404`)
    }
}

export default ContactPage

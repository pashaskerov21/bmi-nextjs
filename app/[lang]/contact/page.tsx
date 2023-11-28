import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { fetchSetting, fetchSettingTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SettingDataType, SettingTranslateDataType } from '@/src/types';
import { ContactPageLayout } from '@/src/layout';

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
    const [settingData, settingTranslateData]: [SettingDataType[] | undefined, SettingTranslateDataType[] | undefined] = await Promise.all([fetchSetting(), fetchSettingTranslate()])
    if (settingData && settingTranslateData) {
        const activeTranslateData: SettingTranslateDataType | undefined = settingTranslateData.find((data) => data.lang === lang && data.setting_id === settingData[0].id);
        if (activeTranslateData) {
            return (
                <React.Fragment>
                    <Suspense fallback={<div className='preloader'></div>}>
                        <ContactPageLayout
                            activeLocale={lang}
                            titleDictionary={titleDictionary}
                            buttonDictionary={buttonDictionary}
                            formDictionary={formDictionary}
                            settingData={settingData[0]}
                            settingTranslateData={activeTranslateData}
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

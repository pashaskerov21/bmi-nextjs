import { getTranslate } from '@/get-translate';
import { Locale, i18n } from '@/i18n-config';
import { TrainerInnerPageLayout } from '@/src/layout';
import { TrainerInnerSection } from '@/src/sections';
import { TrainerDataType, TrainerTranslateDataType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainerSlug = decodeURIComponent(slug);
    const trainerTranslateData: TrainerTranslateDataType[] | undefined = await fetchTrainerTranslate();
    if (trainerTranslateData) {
        const requiredTranslate: TrainerTranslateDataType | undefined = trainerTranslateData?.find((data) => data.lang === lang && data.name.toLocaleLowerCase() === trainerSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.name.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.name.slice(1);
            const pageTitle = `${titleDictionary.trainers} | ${result}`
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

const TrainerDetail = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainerSlug = decodeURIComponent(slug);
    const [trainerData, trainerTranslateData]:
        [TrainerDataType[] | undefined, TrainerTranslateDataType[] | undefined] = await Promise.all([
            fetchTrainer(), fetchTrainerTranslate()]);
    if (trainerData && trainerTranslateData) {
        const activeTranslateData: TrainerTranslateDataType | undefined = trainerTranslateData.find((data) => data.lang === lang && data.name.toLocaleLowerCase() === trainerSlug.toLocaleLowerCase());
        if (activeTranslateData) {
            const allTranslateData: TrainerTranslateDataType[] | [] = trainerTranslateData.filter((data) => data.trainer_id === activeTranslateData.trainer_id)
            const activeData: TrainerDataType | undefined = trainerData.find((data) => data.id === activeTranslateData.trainer_id)
            if (activeData && allTranslateData.length === i18n.locales.length) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <TrainerInnerPageLayout
                                activeData={activeData}
                                activeLocale={lang}
                                activeTranslateData={activeTranslateData}
                                allTranslateData={allTranslateData}
                                titleDictionary={titleDictionary}
                            />
                        </Suspense>
                    </React.Fragment>
                )
            } else {
                redirect(`/${lang}/trainers`);

            }
        } else {
            redirect(`/${lang}/trainers`)
        }
    } else {
        redirect(`/${lang}/404`)
    }
}

export default TrainerDetail

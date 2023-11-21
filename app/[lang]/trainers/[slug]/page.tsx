import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { TrainerInnerSection } from '@/src/sections';
import { TrainerTranslateType, TrainerType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, slug } }: { params: { lang: Locale, slug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainerSlug = decodeURIComponent(slug);
    const trainerTranslateData: TrainerTranslateType[] | undefined = await fetchTrainerTranslate();
    if (trainerTranslateData) {
        const requiredTranslate: TrainerTranslateType | undefined = trainerTranslateData?.find((data) => data.lang === lang && data.name.toLocaleLowerCase() === trainerSlug);
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
        [TrainerType[] | undefined, TrainerTranslateType[] | undefined] = await Promise.all([
            fetchTrainer(), fetchTrainerTranslate()]);
    if (trainerData && trainerTranslateData) {
        const requiredTranslateData: TrainerTranslateType | undefined = trainerTranslateData.find((data) => data.lang === lang && data.name.toLocaleLowerCase() === trainerSlug.toLocaleLowerCase());
        if (requiredTranslateData) {
            const requiredData: TrainerType | undefined = trainerData.find((data) => data.id === requiredTranslateData.trainer_id)
            if (requiredData) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <TrainerInnerSection
                                activeLocale={lang}
                                trainerData={requiredData}
                                translateData={requiredTranslateData}
                                titleDictionary={titleDictionary} />
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

import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { TrainersPageSection } from '@/src/sections';
import { TrainerTranslateType, TrainerType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainersTitle = `BMI | ${titleDictionary.trainers}`;
    return {
        title: trainersTitle,
    }
}

const TrainersPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const [trainerData, trainerTranslateData]:
        [TrainerType[] | undefined, TrainerTranslateType[] | undefined] = await Promise.all([
            fetchTrainer(), fetchTrainerTranslate()]);
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(trainerData && trainerTranslateData) ? (
                    <TrainersPageSection
                        activeLocale={lang}
                        trainerData={trainerData}
                        trainerTranslateData={trainerTranslateData}
                        titleDictionary={titleDictionary} />
                ) : redirect('/404')}
            </Suspense>
        </React.Fragment>
    )
}

export default TrainersPage

import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import TrainerPageLayout from '@/src/layout/trainer/TrainerPageLayout';
import { TrainerDataType, TrainerTranslateDataType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation'

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const pageTitle = `BMI | ${titleDictionary.trainers}`;
    return {
        title: pageTitle,
    }
}

const TrainersPage = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
    const [trainerData, trainerTranslateData]:
        [TrainerDataType[] | undefined, TrainerTranslateDataType[] | undefined] = await Promise.all([
            fetchTrainer(), fetchTrainerTranslate()]);
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    return (
        <React.Fragment>
            <Suspense fallback={<div className='preloader'></div>}>
                {(trainerData && trainerTranslateData) ? (
                    <TrainerPageLayout
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

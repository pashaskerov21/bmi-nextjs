import { getTranslate } from '@/get-translate';
import { Locale } from '@/i18n-config';
import { TrainingInnerSection } from '@/src/sections';
import { TrainerTranslateType, TrainerType, TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate, fetchTraining, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, trainerslug } }: { params: { lang: Locale, trainerslug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainingSlug = decodeURIComponent(trainerslug);
    const trainingTranslateData: TrainingTranslateType[] | undefined = await fetchTrainingTranslate();
    if (trainingTranslateData) {
        const requiredTranslate: TrainingTranslateType | undefined = trainingTranslateData?.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === trainingSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const trainingTitle = `${titleDictionary.trainings} | ${result}`
            return {
                title: trainingTitle
            }
        } else {
            return {}
        }
    } else {
        return {}
    }
}

const TrainingPage = async ({ params: { lang, categoryslug, trainerslug } }: { params: { lang: Locale, categoryslug: string, trainerslug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;

    const categorySlug = decodeURIComponent(categoryslug);
    const trainingSlug = decodeURIComponent(trainerslug);
    const [
        trainingCategoryTranslateData,
        trainingData,
        trainingTranslateData,
        trainerData,
        trainerTranslateData]: [
            TrainingCategoryTranslateType[] | undefined,
            TrainingType[] | undefined,
            TrainingTranslateType[] | undefined,
            TrainerType[] | undefined,
            TrainerTranslateType[] | undefined,
        ] = await Promise.all([
            fetchTrainingCategoryTranslate(),
            fetchTraining(),
            fetchTrainingTranslate(),
            fetchTrainer(),
            fetchTrainerTranslate(),
        ]);
    if (trainingCategoryTranslateData && trainingData && trainingTranslateData && trainerData && trainerTranslateData) {
        const requiredCategoryTranslateData: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.lang === lang && data.title === categorySlug);
        const requiredTrainingTranslateData: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.lang === lang && data.title === trainingSlug);
        if (requiredCategoryTranslateData && requiredTrainingTranslateData) {
            const requiredTrainingData: TrainingType | undefined = trainingData.find((data) => data.id === requiredTrainingTranslateData.training_id);
            if (requiredTrainingData) {
                const filteredTrainers: TrainerType[] = requiredTrainingData.trainersID.map((id) => {
                    return trainerData.find((data) => data.id === id);
                }).filter((trainer): trainer is TrainerType => trainer !== undefined);
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <TrainingInnerSection
                                activeLocale={lang}
                                categoryTranslateData={requiredCategoryTranslateData}
                                trainingData={requiredTrainingData}
                                trainingTranslateData={requiredTrainingTranslateData}
                                trainerData={filteredTrainers}
                                trainerTranslateData={trainerTranslateData}
                                titleDictionary={titleDictionary}
                                buttonDictionary={buttonDictionary} />
                        </Suspense>
                    </React.Fragment>
                )
            } else {
                redirect(`/${lang}/trainings`)
            }

        } else {
            redirect(`/${lang}/trainings`)
        }

    } else {
        redirect(`/${lang}/404`)
    }
}

export default TrainingPage

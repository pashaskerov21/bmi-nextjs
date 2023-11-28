import { getTranslate } from '@/get-translate';
import { Locale, i18n } from '@/i18n-config';
import { TrainingInnerPageLayout } from '@/src/layout';
import { OtherTrainingSection, TrainingInnerSection } from '@/src/sections';
import { TrainerDataType, TrainerTranslateDataType, TrainingCategoryTranslateDataType, TrainingDataType, TrainingTranslateDataType } from '@/src/types';
import { fetchTrainer, fetchTrainerTranslate, fetchTraining, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

export const generateMetadata = async ({ params: { lang, trainerslug } }: { params: { lang: Locale, trainerslug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const trainingSlug = decodeURIComponent(trainerslug);
    const trainingTranslateData: TrainingTranslateDataType[] | undefined = await fetchTrainingTranslate();
    if (trainingTranslateData) {
        const requiredTranslate: TrainingTranslateDataType | undefined = trainingTranslateData?.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === trainingSlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const pageTitle = `${titleDictionary.trainings} | ${result}`
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

const TrainingPage = async ({ params: { lang, categoryslug, trainerslug } }: { params: { lang: Locale, categoryslug: string, trainerslug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const formDictionary = t.form;

    const categorySlug = decodeURIComponent(categoryslug);
    const trainingSlug = decodeURIComponent(trainerslug);
    const [
        trainingCategoryTranslateData,
        trainingData,
        trainingTranslateData,
        trainerData,
        trainerTranslateData]: [
            TrainingCategoryTranslateDataType[] | undefined,
            TrainingDataType[] | undefined,
            TrainingTranslateDataType[] | undefined,
            TrainerDataType[] | undefined,
            TrainerTranslateDataType[] | undefined,
        ] = await Promise.all([
            fetchTrainingCategoryTranslate(),
            fetchTraining(),
            fetchTrainingTranslate(),
            fetchTrainer(),
            fetchTrainerTranslate(),
        ]);
    if (trainingCategoryTranslateData && trainingData && trainingTranslateData && trainerData && trainerTranslateData) {
        const activeCategoryTranslateData: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData.find((data) => data.lang === lang && data.title === categorySlug);
        const activeTrainingTranslateData: TrainingTranslateDataType | undefined = trainingTranslateData.find((data) => data.lang === lang && data.title === trainingSlug);
        if (activeCategoryTranslateData && activeTrainingTranslateData) {
            const activeTrainingData: TrainingDataType | undefined = trainingData.find((data) => data.id === activeTrainingTranslateData.training_id);
            const allCategoryTranslateData: TrainingCategoryTranslateDataType[] | [] = trainingCategoryTranslateData.filter((data) => data.category_id === activeCategoryTranslateData.category_id);
            const allTrainingTranslateData: TrainingTranslateDataType[] | [] = trainingTranslateData.filter((data) => data.training_id === activeTrainingTranslateData.training_id);
            const otherTrainingData: TrainingDataType[] | [] = trainingData.filter((data) => data.id !== activeTrainingTranslateData.training_id && data.categoryID === activeCategoryTranslateData.category_id);
            if (activeTrainingData && allCategoryTranslateData.length === i18n.locales.length && allTrainingTranslateData.length === i18n.locales.length) {
                const filteredTrainers: TrainerDataType[] = activeTrainingData.trainersID.map((id) => {
                    return trainerData.find((data) => data.id === id);
                }).filter((trainer): trainer is TrainerDataType => trainer !== undefined);
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <TrainingInnerPageLayout
                            activeCategoryTranslateData={activeCategoryTranslateData}
                            activeLocale={lang}
                            activeTrainingData={activeTrainingData}
                            activeTrainingTranslateData={activeTrainingTranslateData}
                            allCategoryTranslateData={allCategoryTranslateData}
                            allTrainingTranslateData={allTrainingTranslateData}
                            buttonDictionary={buttonDictionary}
                            formDictionary={formDictionary}
                            otherTrainingData={otherTrainingData}
                            titleDictionary={titleDictionary}
                            trainerData={filteredTrainers}
                            trainerTranslateData={trainerTranslateData}
                            trainingCategoryTranslateData={trainingCategoryTranslateData}
                            trainingTranslateData={trainingTranslateData}
                            />
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

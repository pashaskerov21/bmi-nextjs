import React, { Suspense } from 'react'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import { getTranslate } from '@/get-translate';
import { TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types';
import { fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils';
import { ApplyFormSection, TrainingPageSection } from '@/src/sections';
import { notFound, redirect } from 'next/navigation';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const pageTitle = `BMI | ${titleDictionary.trainings}`;
  return {
    title: pageTitle,
  }
}

const Trainings = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const [
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData]: [
      TrainingCategoryType[] | undefined,
      TrainingCategoryTranslateType[] | undefined,
      TrainingType[] | undefined,
      TrainingTranslateType[] | undefined,
    ] = await Promise.all([
      fetchTrainingCategory(),
      fetchTrainingCategoryTranslate(),
      fetchTraining(),
      fetchTrainingTranslate()]);
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  const formDictionary = t.form;
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        {(trainingCategoryData && trainingCategoryTranslateData && trainingData && trainingTranslateData) ? (
          <React.Fragment>
            <TrainingPageSection
              activeLocale={lang}
              trainingCategoryData={trainingCategoryData}
              trainingCategoryTranslateData={trainingCategoryTranslateData}
              titleDictionary={titleDictionary}
              buttonDictionary={buttonDictionary} />
            <ApplyFormSection
              activeLocale={lang}
              trainingData={trainingData}
              trainingTranslateData={trainingTranslateData}
              titleDictionary={titleDictionary}
              formDictionary={formDictionary}
              buttonDictionary={buttonDictionary} />
          </React.Fragment>
        ) : redirect('/404')}
      </Suspense>
    </React.Fragment>
  )
}

export default Trainings

import React, { Suspense } from 'react'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import { getTranslate } from '@/get-translate';
import { fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils';
import { redirect } from 'next/navigation';
import { TrainingCategoryDataType, TrainingCategoryTranslateDataType, TrainingDataType, TrainingTranslateDataType } from '@/src/types';
import { TrainingPageLayout } from '@/src/layout';

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
      TrainingCategoryDataType[] | undefined,
      TrainingCategoryTranslateDataType[] | undefined,
      TrainingDataType[] | undefined,
      TrainingTranslateDataType[] | undefined,
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
            <TrainingPageLayout
              activeLocale={lang}
              buttonDictionary={buttonDictionary}
              formDictionary={formDictionary}
              titleDictionary={titleDictionary}
              trainingCategoryData={trainingCategoryData}
              trainingCategoryTranslateData={trainingCategoryTranslateData}
              trainingData={trainingData}
              trainingTranslateData={trainingTranslateData}
            />
          </React.Fragment>
        ) : redirect('/404')}
      </Suspense>
    </React.Fragment>
  )
}

export default Trainings

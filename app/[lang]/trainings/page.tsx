import React, { Suspense } from 'react'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import { getTranslate } from '@/get-translate';
import { TrainingCategoryTranslateType, TrainingCategoryType } from '@/src/types';
import { fetchTrainingCategory, fetchTrainingCategoryTranslate } from '@/src/utils';
import { TrainingPageSection } from '@/src/sections';
import { notFound, redirect } from 'next/navigation';

export async function generateMetadata({ params: { lang }, }: { params: { lang: Locale } }): Promise<Metadata> {
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const trainingTitle = `BMI | ${titleDictionary.trainings}`;
  return {
    title: trainingTitle,
  }
}

const Trainings = async ({ params: { lang }, }: { params: { lang: Locale } }) => {
  const [trainingCategoryData, trainingCategoryTranslateData]: [
    TrainingCategoryType[] | undefined, TrainingCategoryTranslateType[] | undefined,
  ] = await Promise.all([fetchTrainingCategory(), fetchTrainingCategoryTranslate()]);
  const t = await getTranslate(lang);
  const titleDictionary = t.title;
  const buttonDictionary = t.button;
  return (
    <React.Fragment>
      <Suspense fallback={<div className='preloader'></div>}>
        {(trainingCategoryData && trainingCategoryTranslateData) ? (
          <TrainingPageSection
            activeLocale={lang}
            trainingCategoryData={trainingCategoryData}
            trainingCategoryTranslateData={trainingCategoryTranslateData}
            titleDictionary={titleDictionary}
            buttonDictionary={buttonDictionary} />
        ) : redirect('/404')}
      </Suspense>
    </React.Fragment>
  )
}

export default Trainings

import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate'
import { Locale } from '@/i18n-config'
import { TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import { fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils'
import { Metadata } from 'next'
import { trainerTranslateData } from '@/src/data'
import { notFound, redirect } from 'next/navigation'
import { Page404Section } from '@/src/sections'

type CategoryPageProps = {
    params: {
        lang: Locale,
        categoryslug: string
    }
}

export const generateMetadata = async ({ params: { lang, categoryslug } }: { params: { lang: Locale, categoryslug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const categorySlug = decodeURIComponent(categoryslug);
    const trainingCategoryTranslateData: TrainingCategoryTranslateType[] | undefined = await fetchTrainingCategoryTranslate();
    if (trainingCategoryTranslateData) {
        const requiredTranslate: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData?.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === categorySlug);
        if (requiredTranslate) {
            let firstLetter = requiredTranslate.title.charAt(0).toLocaleUpperCase();
            let result = firstLetter + requiredTranslate.title.slice(1);
            const categoryTitle = `${titleDictionary.trainings} | ${result}`
            return {
                title: categoryTitle
            }
        } else {
            return {}
        }
    } else {
        return {}
    }


}


const CategoryPage: React.FC<CategoryPageProps> = async ({ params: { lang, categoryslug } }) => {
    const t = await getTranslate(lang);
    const errorDictionary = t.error_404;
    const titleDictionary = t.title;
    const categorySlug = decodeURIComponent(categoryslug);

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
            fetchTrainingTranslate(),
        ]);
    if (trainingCategoryData && trainingCategoryTranslateData && trainingData && trainerTranslateData) {
        const requiredCategoryTranslate: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData?.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === categorySlug);
        if (requiredCategoryTranslate) {
            const categoryData: TrainingCategoryType | undefined = trainingCategoryData.find((data) => data.id === requiredCategoryTranslate.category_id);
            const filteredTrainings: TrainingType[] = trainingData.filter((data) => data.categoryID === requiredCategoryTranslate.category_id);
            if (categoryData && filteredTrainings) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}></Suspense>
                    </React.Fragment>
                )
            } else {
                redirect('/404')
            }
        } else {
            redirect('/404')
        }
    } else {
        redirect('/404')
    }

}

export default CategoryPage

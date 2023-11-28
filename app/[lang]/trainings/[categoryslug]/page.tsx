import React, { Suspense } from 'react'
import { getTranslate } from '@/get-translate'
import { Locale, i18n } from '@/i18n-config'
import { fetchTraining, fetchTrainingCategory, fetchTrainingCategoryTranslate, fetchTrainingTranslate } from '@/src/utils'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { CategoryPageSection } from '@/src/sections'
import { TrainingCategoryDataType, TrainingCategoryTranslateDataType, TrainingDataType, TrainingTranslateDataType } from '@/src/types'
import { CategoryPageLayout } from '@/src/layout'



export const generateMetadata = async ({ params: { lang, categoryslug } }: { params: { lang: Locale, categoryslug: string } }): Promise<Metadata> => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const categorySlug = decodeURIComponent(categoryslug);
    const trainingCategoryTranslateData: TrainingCategoryTranslateDataType[] | undefined = await fetchTrainingCategoryTranslate();
    if (trainingCategoryTranslateData) {
        const requiredTranslate: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData?.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === categorySlug);
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


const CategoryPage = async ({ params: { lang, categoryslug } }: { params: { lang: Locale, categoryslug: string } }) => {
    const t = await getTranslate(lang);
    const titleDictionary = t.title;
    const buttonDictionary = t.button;
    const categorySlug = decodeURIComponent(categoryslug);

    const [
        trainingCategoryData,
        trainingCategoryTranslateData,
        trainingData,
        trainingTranslateData]: [
            TrainingCategoryDataType[] | undefined,
            TrainingCategoryTranslateDataType[] | undefined,
            TrainingDataType[] | undefined,
            TrainingTranslateDataType[] | undefined
        ] = await Promise.all([
            fetchTrainingCategory(),
            fetchTrainingCategoryTranslate(),
            fetchTraining(),
            fetchTrainingTranslate(),
        ]);
    if (trainingCategoryData && trainingCategoryTranslateData && trainingData && trainingTranslateData) {
        const activeTranslateData: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData.find((data) => data.lang === lang && data.title.toLocaleLowerCase() === categorySlug);
        if (activeTranslateData) {
            const activeData: TrainingCategoryDataType | undefined = trainingCategoryData.find((data) => data.id === activeTranslateData.category_id);
            const allTranslateData: TrainingCategoryTranslateDataType[] | [] = trainingCategoryTranslateData.filter((data) => data.category_id === activeTranslateData.category_id);
            const filteredTrainings: TrainingDataType[] | [] = trainingData.filter((data) => data.categoryID === activeTranslateData.category_id);
            if (activeData && filteredTrainings.length > 0 && allTranslateData.length === i18n.locales.length) {
                return (
                    <React.Fragment>
                        <Suspense fallback={<div className='preloader'></div>}>
                            <CategoryPageLayout
                                activeData={activeData}
                                activeLocale={lang}
                                activeTranslateData={activeTranslateData}
                                allTranslateData={allTranslateData}
                                trainingCategoryTranslateData={trainingCategoryTranslateData}
                                buttonDictionary={buttonDictionary}
                                titleDictionary={titleDictionary}
                                trainingData={filteredTrainings}
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

export default CategoryPage

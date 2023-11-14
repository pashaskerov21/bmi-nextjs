'use client'
import { PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import React from 'react'

type CategoryProps = {
    activeLocale: string,
    categoryData: TrainingCategoryType,
    categoryTranslateData: TrainingCategoryTranslateType,
    trainingData: TrainingType[],
    trainingTrainglateData: TrainingTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const CategoryPageSection: React.FC<CategoryProps> = ({
    activeLocale,
    categoryData,
    categoryTranslateData,
    trainingData,
    trainingTrainglateData,
    titleDictionary,
    buttonDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainings,
            path: '/trainings'
        },
        {
            id: 2,
            name: categoryTranslateData.title,
            path: `/trainings/${encodeURIComponent(categoryTranslateData.title.toLocaleLowerCase())}`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle title={categoryTranslateData.title} breadcrumbs={breadcrumbs} titleDictionary={titleDictionary}/>
            </Container>
        </Section>
    )
}

export default React.memo(CategoryPageSection)

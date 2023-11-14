'use client'
import { PageTitle, TrainingCard } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import React from 'react'

type CategoryProps = {
    activeLocale: string,
    categoryData: TrainingCategoryType,
    categoryTranslateData: TrainingCategoryTranslateType,
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const CategoryPageSection: React.FC<CategoryProps> = ({
    activeLocale,
    categoryData,
    categoryTranslateData,
    trainingData,
    trainingTranslateData,
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
                <PageTitle title={categoryTranslateData.title} breadcrumbs={breadcrumbs} titleDictionary={titleDictionary} />
                <Grid $col={5}>
                    {
                        trainingData.map((data) => (
                            <React.Fragment key={data.id}>
                                <CardContent
                                    activeLocale={activeLocale}
                                    categoryTranslateData={categoryTranslateData}
                                    trainingData={data}
                                    trainingTranslateData={trainingTranslateData}
                                    buttonDictionary={buttonDictionary} />
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}


type CardProps = {
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateType,
    trainingData: TrainingType,
    trainingTranslateData: TrainingTranslateType[],
    buttonDictionary: { [key: string]: string },
}

const CardContent: React.FC<CardProps> = ({ activeLocale,categoryTranslateData, trainingData, trainingTranslateData, buttonDictionary }) => {
    const requiredTrainingTranslate: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.training_id === trainingData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            {requiredTrainingTranslate ? (
                <TrainingCard
                    cardType='link'
                    title={requiredTrainingTranslate.title}
                    image={trainingData.cardImage}
                    slug={`/trainings/${encodeURIComponent(categoryTranslateData.title.toLocaleLowerCase())}/${requiredTrainingTranslate.title.toLocaleLowerCase()}`}
                    buttonDictionary={buttonDictionary} />
            ) : null}
        </React.Fragment>
    )
}

export default React.memo(CategoryPageSection)

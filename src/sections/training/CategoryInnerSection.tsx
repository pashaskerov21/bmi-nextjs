'use client'
import { PageTitle, TrainingCardContent } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import React from 'react'

type CategoryProps = {
    activeLocale: string,
    categoryData: TrainingCategoryType,
    individualCategoryTranslateData: TrainingCategoryTranslateType,
    categoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const CategoryPageSection: React.FC<CategoryProps> = ({
    activeLocale,
    individualCategoryTranslateData,
    categoryTranslateData,
    trainingData,
    trainingTranslateData,
    titleDictionary,
    buttonDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainings,
            path: `/${activeLocale}/trainings`
        },
        {
            id: 2,
            name: individualCategoryTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(individualCategoryTranslateData.title.toLocaleLowerCase())}`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={individualCategoryTranslateData.title}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <Grid $col={5}>
                    {
                        trainingData.map((data) => (
                            <React.Fragment key={data.id}>
                                <TrainingCardContent
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

export default React.memo(CategoryPageSection)

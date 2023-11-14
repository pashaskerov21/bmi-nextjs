'use client'
import { PageTitle, TrainingCard } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainingCategoryTranslateType, TrainingCategoryType } from '@/src/types'
import React from 'react'

type TrainingProps = {
    activeLocale: string,
    trainingCategoryData: TrainingCategoryType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const TrainingPageSection: React.FC<TrainingProps> = ({
    activeLocale,
    trainingCategoryData,
    trainingCategoryTranslateData,
    titleDictionary,
    buttonDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainings,
            path: '/trainings'
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    title={titleDictionary.trainings}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <Grid $col={5}>
                    {
                        trainingCategoryData.map((data) => (
                            <React.Fragment key={data.id}>
                                <TrainingCard
                                    cardType='link'
                                    activeLocale={activeLocale}
                                    categoryData={data}
                                    trainingCategoryTranslateData={trainingCategoryTranslateData}
                                    buttonDictionary={buttonDictionary}
                                />
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}

export default TrainingPageSection

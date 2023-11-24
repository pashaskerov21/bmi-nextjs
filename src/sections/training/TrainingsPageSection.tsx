'use client'
import { CategoryCardContent, PageTitle, TrainingCard } from '@/src/components'
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
            path: `${activeLocale}/trainings`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={titleDictionary.trainings}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <Grid $col={5}>
                    {
                        trainingCategoryData.map((data) => (
                            <React.Fragment key={data.id}>
                                <CategoryCardContent
                                    activeLocale={activeLocale}
                                    categoryData={data}
                                    categoryTranslateData={trainingCategoryTranslateData}
                                    buttonDictionary={buttonDictionary} />
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}



export default React.memo(TrainingPageSection)

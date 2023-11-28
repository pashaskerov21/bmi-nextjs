'use client'
import React from 'react'
import { CategoryCardContent, PageTitle, TrainingCard } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainingPageSectionProps } from '@/src/types'



const TrainingPageSection: React.FC<TrainingPageSectionProps> = ({
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

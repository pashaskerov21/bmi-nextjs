'use client'
import React from 'react'
import { PageTitle, TrainingCardContent } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, CategoryInnerSectionProps } from '@/src/types'

const CategoryPageSection: React.FC<CategoryInnerSectionProps> = ({
    activeLocale,
    activecategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainingCategoryTranslateData,
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
            name: activecategoryTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(activecategoryTranslateData.title.toLocaleLowerCase())}`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={activecategoryTranslateData.title}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <Grid $col={5}>
                    {
                        trainingData.map((data) => (
                            <React.Fragment key={data.id}>
                                <TrainingCardContent
                                    activeLocale={activeLocale}
                                    categoryTranslateData={trainingCategoryTranslateData}
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

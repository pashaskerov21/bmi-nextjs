'use client'
import React from 'react'
import { PageTitle, TrainerCard } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainerSectionProps } from '@/src/types'

const TrainersPageSection: React.FC<TrainerSectionProps> = ({ activeLocale, trainerData, trainerTranslateData, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainers,
            path: `/${activeLocale}/trainers`

        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={titleDictionary.trainers}
                    breadcrumbs={breadcrumbs} 
                    titleDictionary={titleDictionary} />
                <Grid $col={4}>
                    {
                        trainerData.map((data) => (
                            <React.Fragment key={data.id}>
                                <TrainerCard activeLocale={activeLocale} trainerData={data} trainerTranslateData={trainerTranslateData} />
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}

export default React.memo(TrainersPageSection)

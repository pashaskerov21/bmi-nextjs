'use client'
import { PageTitle, TrainerCard } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainerTranslateType, TrainerType } from '@/src/types'
import React from 'react'

type TrainerProps = {
    activeLocale: string,
    trainerData: TrainerType[],
    trainerTranslateData: TrainerTranslateType[],
    titleDictionary: { [key: string]: string },
}

const TrainersPageSection: React.FC<TrainerProps> = ({ activeLocale, trainerData, trainerTranslateData, titleDictionary }) => {
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

export default TrainersPageSection

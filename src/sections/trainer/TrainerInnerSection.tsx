'use client'
import { PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainerTranslateType, TrainerType } from '@/src/types'
import React from 'react'

type TrainerProps = {
    activeLocale: string,
    trainerData: TrainerType,
    translateData: TrainerTranslateType,
    titleDictionary: { [key: string]: string },
}

const TrainerInnerSection: React.FC<TrainerProps> = ({ activeLocale, trainerData, translateData, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainers,
            path: `/${activeLocale}/trainers`

        },
        {
            id: 2,
            name: translateData.name,
            path: `/${activeLocale}/trainers/${encodeURIComponent(translateData.name.toLocaleLowerCase())}`
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={translateData.name}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
            </Container>
        </Section>
    )
}

export default TrainerInnerSection

'use client'
import React from 'react'
import Image from 'next/image'
import { PageTitle, TrainingAccordion } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainingContentWrapper } from './style'
import { Breadcrumb, TrainingInnerSectionProps } from '@/src/types'

const TrainingInnerSection: React.FC<TrainingInnerSectionProps> = ({
    activeLocale,
    activeCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    titleDictionary,
    buttonDictionary,
    formDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.trainings,
            path: `/${activeLocale}/trainings`
        },
        {
            id: 2,
            name: activeCategoryTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(activeCategoryTranslateData.title.toLocaleLowerCase())}`
        },
        {
            id: 3,
            name: trainingTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(activeCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(trainingTranslateData.title.toLocaleLowerCase())}`
        },
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={trainingTranslateData.title}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <TrainingContentWrapper>
                    <div className="banner-img">
                        <Image src={trainingData.innerImage} width={1000} height={400} alt='training-banner' />
                    </div>
                    <div className="heading">
                        <h4 className='title'>{trainingTranslateData.title}</h4>
                        <div className={`status-badge ${trainingData.status ? 'online' : 'offline'}`}>
                            <Image src={trainingData.status ? '/icon/online-icon.png' : '/icon/offline-icon.png'} width={20} height={20} alt='' />
                            <span>{trainingData.status ? 'online' : 'offline'}</span>
                        </div>
                    </div>
                    <TrainingAccordion
                        activeLocale={activeLocale}
                        trainingTranslateData={trainingTranslateData}
                        trainerData={trainerData}
                        trainerTranslateData={trainerTranslateData}
                        titleDictionary={titleDictionary}
                        buttonDictionary={buttonDictionary}
                        formDictionary={formDictionary} />
                </TrainingContentWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(TrainingInnerSection)

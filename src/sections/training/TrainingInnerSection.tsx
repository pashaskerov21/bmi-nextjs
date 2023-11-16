'use client'
import { PageTitle, TrainingAccordion } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { Breadcrumb, TrainerTranslateType, TrainerType, TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types'
import React from 'react'
import { TrainingContentWrapper } from './style'
import Image from 'next/image'

type TrainingProps = {
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateType,
    trainingData: TrainingType,
    trainingTranslateData: TrainingTranslateType,
    trainerData: TrainerType[],
    trainerTranslateData: TrainerTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const TrainingInnerSection: React.FC<TrainingProps> = ({
    activeLocale,
    categoryTranslateData,
    trainingData,
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
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
            name: categoryTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(categoryTranslateData.title.toLocaleLowerCase())}`
        },
        {
            id: 3,
            name: trainingTranslateData.title,
            path: `/${activeLocale}/trainings/${encodeURIComponent(categoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(trainingTranslateData.title.toLocaleLowerCase())}`
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
                        titleDictionary={titleDictionary} />
                </TrainingContentWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(TrainingInnerSection)

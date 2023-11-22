'use client'
import { ApplyFormContainer, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import React from 'react'
import { ApplySectionWrapper } from './style'
import { TrainingTranslateType, TrainingType } from '@/src/types'

type ApplySectionProps = {
    activeLocale: string
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
}

const ApplyFormSection: React.FC<ApplySectionProps> = ({ activeLocale,trainingData, trainingTranslateData, titleDictionary, formDictionary, buttonDictionary }) => {
    return (
        <ApplySectionWrapper>
            <Section $py={40}>
                <Container>
                    <SectionTitle title={titleDictionary.apply} />
                    <ApplyFormContainer
                    activeLocale={activeLocale}
                        trainingData={trainingData}
                        trainingTranslateData={trainingTranslateData}
                        formDictionary={formDictionary}
                        buttonDictionary={buttonDictionary} />
                </Container>
            </Section>
        </ApplySectionWrapper>
    )
}

export default React.memo(ApplyFormSection)

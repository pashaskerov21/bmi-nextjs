'use client'
import React from 'react'
import { ApplyFormContainer, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { ApplySectionWrapper } from './style'
import { ApplySectionProps } from '@/src/types'

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

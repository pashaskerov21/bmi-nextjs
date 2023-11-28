'use client'
import React from 'react'
import { PageTitle, VacancyFormContainer } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { VacancyContentWrapper } from './style'
import { Breadcrumb, VacanySectionProps } from '@/src/types'

const VacancySection: React.FC<VacanySectionProps> = ({ activeLocale, titleDictionary, buttonDictionary, formDictionary, careerData, careerTranslateData }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/career`,
            name: titleDictionary.career,
        },
        {
            id: 2,
            path: `/${activeLocale}/career/${encodeURIComponent(careerTranslateData.title.toLocaleLowerCase())}`,
            name: careerTranslateData.title,
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={careerTranslateData.title}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <VacancyContentWrapper>
                    <VacancyFormContainer
                        buttonDictionary={buttonDictionary}
                        formDictionary={formDictionary} />
                </VacancyContentWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(VacancySection)

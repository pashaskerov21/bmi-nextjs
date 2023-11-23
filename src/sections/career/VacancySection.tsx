'use client'
import { PageTitle, VacancyFormContainer } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { Breadcrumb, CareerTranslateType, CareerType } from '@/src/types'
import React from 'react'
import { VacancyContentWrapper } from './style'
import { FaLocationDot } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'

type VacanyProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    careerData: CareerType,
    careerTranslateData: CareerTranslateType,
}

const VacancySection: React.FC<VacanyProps> = ({ activeLocale, titleDictionary, buttonDictionary, formDictionary, careerData, careerTranslateData }) => {
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

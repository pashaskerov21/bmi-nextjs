'use client'
import React from 'react'
import { Container, Section } from '@/src/styles/utils'
import { ReportWrapper } from './style'
import { ReportItem } from '@/src/components'
import { ReportSectionProps } from '@/src/types'


const ReportSection: React.FC<ReportSectionProps> = ({activeLocale, reportData, reportTranslateData}) => {
    return (
        <Section $py={20} $py_xl={40}>
            <Container>
                <ReportWrapper>
                    {reportData.map((data) => (
                        <React.Fragment key={data.id}>
                            <ReportItem activeLocale={activeLocale} reportData={data} reportTranslateData={reportTranslateData}/>
                        </React.Fragment>
                    ))}
                </ReportWrapper>
            </Container>
        </Section>
    )
}

export default React.memo(ReportSection)

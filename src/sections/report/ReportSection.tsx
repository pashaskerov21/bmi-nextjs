'use client'
import { Container, Section } from '@/src/styles/utils'
import { ReportTranslateType, ReportType } from '@/src/types'
import React from 'react'
import { ReportWrapper } from './style'
import { ReportItem } from '@/src/components'

type ReportProps = {
    activeLocale: string,
    reportData: ReportType[],
    reportTranslateData: ReportTranslateType[],
}


const ReportSection: React.FC<ReportProps> = ({activeLocale, reportData, reportTranslateData}) => {
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

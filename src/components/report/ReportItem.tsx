'use client'
import React from 'react'
import { ItemWrapper } from './style'
import Image from 'next/image'
import { ReportTranslateType, ReportType } from '@/src/types'
import Counter from './Counter'

type ReportProps = {
    activeLocale: string,
    reportData: ReportType,
    reportTranslateData: ReportTranslateType[],
}

const ReportItem: React.FC<ReportProps> = ({activeLocale, reportData, reportTranslateData}) => {
    const requiredTranslate = reportTranslateData.find((data) => data.report_id === reportData.id && data.lang === activeLocale)
    return (
        <ItemWrapper>
            <div className="icon">
                <Image src={reportData.icon} width={50} height={50} alt='icon' />
            </div>
            <Counter value={reportData.value} />
            <h4 className="title">{requiredTranslate?.title}</h4>
        </ItemWrapper>
    )
}

export default React.memo(ReportItem)

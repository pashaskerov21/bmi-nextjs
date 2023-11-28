'use client'
import React from 'react'
import { ItemWrapper } from './style'
import Image from 'next/image'
import Counter from './Counter'
import { ReportItemProps, ReportTranslateDataType } from '@/src/types'

const ReportItem: React.FC<ReportItemProps> = ({ activeLocale, reportData, reportTranslateData }) => {
    const requiredTranslate: ReportTranslateDataType | undefined = reportTranslateData.find((data) => data.report_id === reportData.id && data.lang === activeLocale)
    return (
        <React.Fragment>
            {requiredTranslate ? (
                <ItemWrapper>
                    <div className="icon">
                        <Image src={reportData.icon} width={50} height={50} alt='icon' />
                    </div>
                    <Counter value={reportData.value} />
                    <h4 className="title">{requiredTranslate?.title}</h4>
                </ItemWrapper>
            ) : null}
        </React.Fragment>
    )
}

export default React.memo(ReportItem)

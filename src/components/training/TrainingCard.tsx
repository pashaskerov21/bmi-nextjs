import { TrainingCategoryTranslateType, TrainingCategoryType } from '@/src/types'
import React from 'react'
import { TrainingCardWrapper } from './style'
import Link from 'next/link'

type CardProps = {
    activeLocale: string,
    cardType: string,
    categoryData: TrainingCategoryType,
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    buttonDictionary: { [key: string]: string },
    slug?: string,
}

const TrainingCard: React.FC<CardProps> = ({
    activeLocale,
    cardType,
    categoryData,
    trainingCategoryTranslateData,
    buttonDictionary,
    slug }) => {
    const requiredTranslate: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.category_id === categoryData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            <TrainingCardWrapper $bgImage={categoryData.image}>
                <div className="content">
                    <div className="title">
                        {requiredTranslate?.title}
                    </div>
                    {
                        cardType === 'button' ? (
                            <div className="detail">{buttonDictionary.details}</div>
                        ) : (
                            <React.Fragment>
                                <Link href={slug ? slug.toLocaleLowerCase() : '/'} className='detail'>{buttonDictionary.details}</Link>
                            </React.Fragment>
                        )
                    }
                </div>
            </TrainingCardWrapper>
        </React.Fragment>
    )
}

export default React.memo(TrainingCard)

import { TrainingCategoryTranslateType, TrainingCategoryType } from '@/src/types'
import React from 'react'
import { TrainingCardWrapper } from './style'
import Link from 'next/link'

type CardProps = {
    cardType: string,
    title: string,
    image: string,
    slug?: string,
    buttonDictionary: { [key: string]: string },
}

const TrainingCard: React.FC<CardProps> = ({
    cardType,
    title,
    image,
    slug,
    buttonDictionary }) => {
    return (
        <React.Fragment>
            <TrainingCardWrapper $bgImage={image}>
                <div className="content">
                    <div className="title">
                        {title}
                    </div>
                    {
                        cardType === 'button' ? (
                            <div className="detail">{buttonDictionary.details}</div>
                        ) : (
                            <React.Fragment>
                                <Link href={slug ? slug.toLocaleLowerCase() : '/'} className='detail'>{buttonDictionary.details}</Link>
                                {/* <Link href={`/trainings/${encodeURIComponent(title.toLocaleLowerCase())}`} className='detail'>{buttonDictionary.details}</Link> */}
                            </React.Fragment>
                        )
                    }
                </div>
            </TrainingCardWrapper>
        </React.Fragment>
    )
}

export default React.memo(TrainingCard)

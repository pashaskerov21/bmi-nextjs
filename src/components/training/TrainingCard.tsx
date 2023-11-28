'use client'
import React from 'react'
import Link from 'next/link'
import { TrainingCardWrapper } from './style'
import { TrainingCardProps } from '@/src/types'



const TrainingCard: React.FC<TrainingCardProps> = ({
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
                            </React.Fragment>
                        )
                    }
                </div>
            </TrainingCardWrapper>
        </React.Fragment>
    )
}

export default React.memo(TrainingCard)

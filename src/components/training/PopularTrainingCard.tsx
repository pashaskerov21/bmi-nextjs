'use client'
import { TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type CardProps = {
    toggleTrainingCanvas: () => void,
    activeLocale: string,
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType,
    trainingTranslateData: TrainingTranslateType[],
}

const PopularTrainingCard: React.FC<CardProps> = ({ toggleTrainingCanvas, activeLocale, trainingCategoryTranslateData, trainingData, trainingTranslateData }) => {
    const requiredTrainingTranslateData: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.lang === activeLocale && data.training_id === trainingData.id);
    const requiredCategoryTranslateData: TrainingCategoryTranslateType | undefined = trainingCategoryTranslateData.find((data) => data.lang === activeLocale && data.category_id === trainingData.categoryID);
    return (
        <React.Fragment>
            {(requiredTrainingTranslateData && requiredCategoryTranslateData) ? (
                <React.Fragment>
                    <Link
                        className="popular-card"
                        onClick={toggleTrainingCanvas}
                        href={`/${activeLocale}/trainings/${encodeURIComponent(requiredCategoryTranslateData.title.toLocaleLowerCase())}/${encodeURIComponent(requiredTrainingTranslateData.title.toLocaleLowerCase())}`}
                    >
                        <div className="image">
                            <Image src={trainingData.cardImage} width={400} height={250} alt=''/>
                        </div>
                        <div className="title">{requiredTrainingTranslateData.title}</div>
                    </Link>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

export default React.memo(PopularTrainingCard)

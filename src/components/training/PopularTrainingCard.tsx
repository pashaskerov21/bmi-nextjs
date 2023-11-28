'use client'
import { PopularTrainingCardProps, TrainingCategoryTranslateDataType, TrainingTranslateDataType} from '@/src/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const PopularTrainingCard: React.FC<PopularTrainingCardProps> = ({ toggleTrainingCanvas, activeLocale, trainingCategoryTranslateData, trainingData, trainingTranslateData }) => {
    const requiredTrainingTranslateData: TrainingTranslateDataType | undefined = trainingTranslateData.find((data) => data.lang === activeLocale && data.training_id === trainingData.id);
    const requiredCategoryTranslateData: TrainingCategoryTranslateDataType | undefined = trainingCategoryTranslateData.find((data) => data.lang === activeLocale && data.category_id === trainingData.categoryID);
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

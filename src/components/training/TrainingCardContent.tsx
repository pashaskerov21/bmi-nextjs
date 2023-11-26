'use client'
import React from "react";
import { TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from "@/src/types";
import TrainingCard from "./TrainingCard";

type CardProps = {
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType,
    trainingTranslateData: TrainingTranslateType[],
    buttonDictionary: { [key: string]: string },
}

const TrainingCardContent: React.FC<CardProps> = ({ activeLocale, categoryTranslateData, trainingData, trainingTranslateData, buttonDictionary }) => {
    const requiredTrainingTranslate: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.training_id === trainingData.id && data.lang === activeLocale);
    const requiredCategoryTranslate: TrainingCategoryTranslateType | undefined = categoryTranslateData.find((data) => data.lang === activeLocale && data.category_id === trainingData.categoryID);
    return (
        <React.Fragment>
            {(requiredTrainingTranslate && requiredCategoryTranslate) ? (
                <TrainingCard
                    cardType='link'
                    title={requiredTrainingTranslate.title}
                    image={trainingData.cardImage}
                    slug={`/${activeLocale}/trainings/${encodeURIComponent(requiredCategoryTranslate.title.toLocaleLowerCase())}/${requiredTrainingTranslate.title.toLocaleLowerCase()}`}
                    buttonDictionary={buttonDictionary} />
            ) : null}
        </React.Fragment>
    )
}
export default React.memo(TrainingCardContent)
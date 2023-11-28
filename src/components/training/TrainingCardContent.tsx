'use client'
import React from "react";
import { TrainingCardContentCardProps, TrainingCategoryTranslateDataType, TrainingTranslateDataType } from "@/src/types";
import TrainingCard from "./TrainingCard";

const TrainingCardContent: React.FC<TrainingCardContentCardProps> = ({ activeLocale, categoryTranslateData, trainingData, trainingTranslateData, buttonDictionary }) => {
    const requiredTrainingTranslate: TrainingTranslateDataType | undefined = trainingTranslateData.find((data) => data.training_id === trainingData.id && data.lang === activeLocale);
    const requiredCategoryTranslate: TrainingCategoryTranslateDataType | undefined = categoryTranslateData.find((data) => data.lang === activeLocale && data.category_id === trainingData.categoryID);
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
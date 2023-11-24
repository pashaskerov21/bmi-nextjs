'use client'
import React from 'react'
import { TrainingCategoryTranslateType, TrainingCategoryType } from "@/src/types";
import TrainingCard from "./TrainingCard";

type CardProps = {
    activeLocale: string,
    categoryData: TrainingCategoryType,
    categoryTranslateData: TrainingCategoryTranslateType[],
    buttonDictionary: { [key: string]: string },
}

const CategoryCardContent: React.FC<CardProps> = ({ activeLocale, categoryData, categoryTranslateData, buttonDictionary }) => {
    const requiredTranslate: TrainingCategoryTranslateType | undefined = categoryTranslateData.find((data) => data.category_id === categoryData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            {requiredTranslate ? (
                <TrainingCard
                    cardType='link'
                    title={requiredTranslate.title}
                    image={categoryData.image}
                    slug={`/${activeLocale}/trainings/${encodeURIComponent(requiredTranslate.title.toLocaleLowerCase())}`}
                    buttonDictionary={buttonDictionary} />
            ) : null}
        </React.Fragment>
    )
}

export default React.memo(CategoryCardContent)
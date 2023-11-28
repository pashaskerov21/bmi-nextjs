'use client'
import React from 'react'
import TrainingCard from "./TrainingCard";
import { CategoryCardContentProps, TrainingCategoryTranslateDataType } from '@/src/types';

const CategoryCardContent: React.FC<CategoryCardContentProps> = ({ activeLocale, categoryData, categoryTranslateData, buttonDictionary }) => {
    const requiredTranslate: TrainingCategoryTranslateDataType | undefined = categoryTranslateData.find((data) => data.category_id === categoryData.id && data.lang === activeLocale);
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
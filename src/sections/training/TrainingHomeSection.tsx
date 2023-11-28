'use client'
import { SectionTitle, TrainingCard, TrainingModal } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainingCategoryTranslateDataType, TrainingCategoryDataType, TrainingTranslateDataType, TrainingDataType, TrainingHomeSectionProps } from '@/src/types'
import { trainingCategorySettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

const TrainingHomeSection: React.FC<TrainingHomeSectionProps> = ({
    activeLocale,
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    titleDictionary,
    buttonDictionary, }) => {
    const [activeCategory, setActiveCategory] = React.useState<TrainingCategoryDataType | undefined>();
    const [showTrainingModal, setShowTrainingModal] = React.useState<boolean>(false);
    const handleCategoryCard = React.useCallback((category: TrainingCategoryDataType) => {
        setActiveCategory(category);
        setShowTrainingModal(!showTrainingModal);
        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = showTrainingModal ? "auto" : "hidden";
        }
    }, [activeCategory, showTrainingModal])
    const toggleTrainingModal = React.useCallback(() => {
        setShowTrainingModal(!showTrainingModal);
        const body = document.querySelector('body');
        if (body) {
            body.style.overflow = showTrainingModal ? "auto" : "hidden";
        }
    }, [showTrainingModal])
    return (
        <React.Fragment>
            <Container>
                <SectionTitle title={titleDictionary.trainings} />
            </Container>
            <Section $bgColor='#193263' $py={40}>
                <Container>
                    <Slider {...trainingCategorySettings}>
                        {
                            trainingCategoryData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <div className="slide-inner" onClick={() => handleCategoryCard(data)}>
                                        <CardContent
                                            activeLocale={activeLocale}
                                            categoryData={data}
                                            categoryTranslateData={trainingCategoryTranslateData}
                                            buttonDictionary={buttonDictionary} />
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </Slider>
                </Container>
            </Section>
            {(activeCategory && showTrainingModal) ? (
                <TrainingModal
                    activeLocale={activeLocale}
                    category={activeCategory}
                    categoryTranslateData={trainingCategoryTranslateData}
                    trainingData={trainingData}
                    trainingTranslateData={trainingTranslateData}
                    showTrainingModal={showTrainingModal}
                    toggleTrainingModal={toggleTrainingModal}
                    buttonDictionary={buttonDictionary} />
            ) : null}
        </React.Fragment>
    )
}

type CardProps = {
    activeLocale: string,
    categoryData: TrainingCategoryDataType,
    categoryTranslateData: TrainingCategoryTranslateDataType[],
    buttonDictionary: { [key: string]: string },
}

const CardContent: React.FC<CardProps> = ({ activeLocale, categoryData, categoryTranslateData, buttonDictionary }) => {
    const requiredTranslate: TrainingCategoryTranslateDataType | undefined = categoryTranslateData.find((data) => data.category_id === categoryData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            {requiredTranslate ? (
                <TrainingCard
                    cardType='button'
                    title={requiredTranslate.title}
                    image={categoryData.image}
                    buttonDictionary={buttonDictionary} />
            ) : null}
        </React.Fragment>
    )
}

export default React.memo(TrainingHomeSection)

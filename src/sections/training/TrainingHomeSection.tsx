'use client'
import { SectionTitle, TrainingCard, TrainingModal } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import { trainingCategorySettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

type TrainingProps = {
    activeLocale: string,
    trainingCategoryData: TrainingCategoryType[],
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const TrainingHomeSection: React.FC<TrainingProps> = ({
    activeLocale,
    trainingCategoryData,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData,
    titleDictionary,
    buttonDictionary, }) => {
    const [activeCategory, setActiveCategory] = React.useState<TrainingCategoryType | undefined>();
    const [showTrainingModal, setShowTrainingModal] = React.useState<boolean>(false);
    const handleCategoryCard = React.useCallback((category: TrainingCategoryType) => {
        setActiveCategory(category);
        setShowTrainingModal(!showTrainingModal);
    }, [activeCategory, showTrainingModal])
    const toggleTrainingModal = React.useCallback(() => {
        setShowTrainingModal(!showTrainingModal)
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
    categoryData: TrainingCategoryType,
    categoryTranslateData: TrainingCategoryTranslateType[],
    buttonDictionary: { [key: string]: string },
}

const CardContent: React.FC<CardProps> = ({ activeLocale, categoryData, categoryTranslateData, buttonDictionary }) => {
    const requiredTranslate: TrainingCategoryTranslateType | undefined = categoryTranslateData.find((data) => data.category_id === categoryData.id && data.lang === activeLocale);
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

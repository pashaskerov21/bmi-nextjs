'use client'
import { TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import React from 'react'
import { TrainingModalBackdrop, TrainingModalWrapper, TrainingSlide } from './style'
import { FaArrowLeftLong, FaArrowRightLong, FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import { trainingModalSliderSettings } from '@/src/utils'

type ModalProps = {
    activeLocale: string,
    category: TrainingCategoryType,
    categoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
    buttonDictionary: { [key: string]: string },
    showTrainingModal: boolean,
    toggleTrainingModal: () => void,
}

const TrainingModal: React.FC<ModalProps> = ({
    activeLocale,
    category,
    categoryTranslateData,
    trainingData,
    trainingTranslateData,
    buttonDictionary,
    showTrainingModal,
    toggleTrainingModal }) => {
    const filteredTrainings: TrainingType[] = trainingData.filter((data) => data.categoryID === category.id);

    type SliderRefType = React.RefObject<Slider>;
    const slideRef: SliderRefType = React.useRef<Slider>(null);

    const handleNext = () => {
        if (slideRef.current) {
            slideRef.current.slickNext();
        }
    }
    const handlePrev = () => {
        if (slideRef.current) {
            slideRef.current.slickPrev();
        }
    }
    return (
        <React.Fragment>
            {showTrainingModal ? (
                <React.Fragment>
                    <TrainingModalBackdrop onClick={toggleTrainingModal} />
                    <TrainingModalWrapper>
                        <button className="close-button" onClick={toggleTrainingModal}>
                            <FaXmark />
                        </button>
                        <div className="inner">
                            <div className='arrow-btn prev' onClick={handlePrev}><FaChevronLeft /></div>
                            <div className='arrow-btn next' onClick={handleNext}><FaChevronRight /></div>
                            <div className="training-control">
                                <div className='custom-btn' onClick={handlePrev}><FaArrowLeftLong /> {buttonDictionary.prev_training}</div>
                                <div className='custom-btn' onClick={handleNext}>{buttonDictionary.next_training} <FaArrowRightLong /></div>
                            </div>
                            <Slider ref={slideRef as React.RefObject<any>} {...trainingModalSliderSettings}>

                                {
                                    (filteredTrainings && filteredTrainings.length > 0) ? (
                                        filteredTrainings.map((data) => (
                                            <div className="slide-inner">
                                                <TrainingSlide>
                                                    <div className="image">
                                                        <Image src={data.cardImage} width={500} height={400} alt='' />
                                                    </div>
                                                    <div className="content">
                                                        <div className={`status-badge ${data.status ? 'online' : 'offline'}`}>
                                                            <Image src={data.status ? '/icon/online-icon.png' : '/icon/offline-icon.png'} width={20} height={20} alt='' />
                                                            <span>{data.status ? 'online' : 'offline'}</span>
                                                        </div>
                                                        <SlideContent activeLocale={activeLocale} category_id={data.categoryID} training_id={data.id} categoryTranslateData={categoryTranslateData} trainingTranslateData={trainingTranslateData} buttonDictionary={buttonDictionary} />
                                                    </div>
                                                </TrainingSlide>
                                            </div>
                                        ))
                                    ) : null
                                }
                            </Slider>
                        </div>
                    </TrainingModalWrapper>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}

type ContentProps = {
    category_id: number,
    training_id: number,
    activeLocale: string,
    categoryTranslateData: TrainingCategoryTranslateType[],
    trainingTranslateData: TrainingTranslateType[],
    buttonDictionary: { [key: string]: string },
}

const SlideContent: React.FC<ContentProps> = ({ category_id, training_id, activeLocale, categoryTranslateData, trainingTranslateData, buttonDictionary }) => {
    const requiredCategoryTranslate: TrainingCategoryTranslateType | undefined = categoryTranslateData.find((data) => data.category_id === category_id && data.lang === activeLocale);
    const requiredTrainingTranslate: TrainingTranslateType | undefined = trainingTranslateData.find((data) => data.training_id === training_id && data.lang === activeLocale)
    return (
        <React.Fragment>
            {
                (requiredTrainingTranslate && requiredCategoryTranslate) ? (
                    <React.Fragment>
                        <h3 className="title">{requiredTrainingTranslate.title}</h3>
                        <h4 className="category">{requiredCategoryTranslate.title}</h4>
                        <div className="text">
                            {requiredTrainingTranslate.generalInformation.length > 200 ? requiredTrainingTranslate.generalInformation.slice(0, 200) + ' .....' : requiredTrainingTranslate.generalInformation}
                        </div>
                        <div className="buttons">
                            <Link href={`/${activeLocale}/trainings/${encodeURIComponent(requiredCategoryTranslate.title)}/${encodeURIComponent(requiredTrainingTranslate.title)}`}>{buttonDictionary.details}</Link>
                            <Link href={`/${activeLocale}/trainings/${encodeURIComponent(requiredCategoryTranslate.title)}/${encodeURIComponent(requiredTrainingTranslate.title)}`}>{buttonDictionary.registration}</Link>
                        </div>
                    </React.Fragment>
                ) : null
            }

        </React.Fragment>
    )
}

export default React.memo(TrainingModal)

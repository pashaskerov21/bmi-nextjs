'use client'
import React from 'react'
import { CanvasWrapper } from './style'
import { FaXmark } from 'react-icons/fa6'
import PopularTrainingCard from '../training/PopularTrainingCard'
import { TrainingCanvasProps } from '@/src/types'

const TrainingCanvas: React.FC<TrainingCanvasProps> = ({
    activeLocale,
    showTrainingCanvas,
    toggleTrainingCanvas,
    titleDictionary,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData }) => {
    return (
        <React.Fragment>
            {
                showTrainingCanvas ? (
                    <div className='black-backdrop' onClick={toggleTrainingCanvas} />
                ) : null
            }
            <CanvasWrapper $active={showTrainingCanvas}>
                <div className="canvas-content training">
                    <div className="header">
                        <h1 className="title">{titleDictionary.popular_trainings}</h1>
                        <div className="close-button" onClick={toggleTrainingCanvas}>
                            <FaXmark />
                        </div>
                    </div>
                    <div className="body">
                        <div className="trainings-container">
                            {
                                trainingData.map((data) => (
                                    <React.Fragment key={data.id}>
                                        <PopularTrainingCard
                                            toggleTrainingCanvas={toggleTrainingCanvas}
                                            activeLocale={activeLocale}
                                            trainingCategoryTranslateData={trainingCategoryTranslateData}
                                            trainingData={data}
                                            trainingTranslateData={trainingTranslateData} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </CanvasWrapper>
        </React.Fragment>
    )
}

export default React.memo(TrainingCanvas)

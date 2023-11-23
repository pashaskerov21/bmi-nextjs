import React from 'react'
import { CanvasWrapper } from './style'
import { FaXmark } from 'react-icons/fa6'
import ApplyFormContainer from '../form/ApplyFormContainer'
import { TrainingTranslateType, TrainingType } from '@/src/types'

type ApplyCanvasProps = {
    activeLocale: string,
    showApplyCanvas: boolean,
    toggleApplyCanvas: () => void,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
}

const ApplyCanvas: React.FC<ApplyCanvasProps> = ({
    activeLocale,
    showApplyCanvas,
    toggleApplyCanvas,
    titleDictionary,
    buttonDictionary,
    formDictionary,
    trainingData,
    trainingTranslateData }) => {
    return (
        <React.Fragment>
            {
                showApplyCanvas ? (
                    <div className='black-backdrop' onClick={toggleApplyCanvas} />
                ) : null
            }
            <CanvasWrapper $active={showApplyCanvas}>
                <div className="canvas-content apply">
                    <div className="header">
                        <h1 className="title">{titleDictionary.apply}</h1>
                        <div className="close-button" onClick={toggleApplyCanvas}>
                            <FaXmark />
                        </div>
                    </div>
                    <div className="body">
                        <ApplyFormContainer
                            activeLocale={activeLocale}
                            trainingData={trainingData}
                            trainingTranslateData={trainingTranslateData}
                            buttonDictionary={buttonDictionary}
                            formDictionary={formDictionary}
                        />
                    </div>
                </div>
            </CanvasWrapper>
        </React.Fragment>
    )
}

export default React.memo(ApplyCanvas)

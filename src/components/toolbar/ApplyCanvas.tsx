import React from 'react'
import { CanvasWrapper } from './style'
import { FaXmark } from 'react-icons/fa6'
import ApplyFormContainer from '../form/ApplyFormContainer'
import { ApplyCanvasProps } from '@/src/types'



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

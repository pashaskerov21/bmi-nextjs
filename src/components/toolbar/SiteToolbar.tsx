'use client'
import React from 'react'
import { ToolbarButtonWrapper } from './style'
import Image from 'next/image'
import ApplyCanvas from './ApplyCanvas'
import TrainingCanvas from './TrainingCanvas'
import { TrainingCategoryTranslateType, TrainingTranslateType, TrainingType } from '@/src/types'

type ToolbarProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
    formDictionary: {
        [key: string]: {
            [key: string]: string
        }
    },
    trainingCategoryTranslateData: TrainingCategoryTranslateType[],
    trainingData: TrainingType[],
    trainingTranslateData: TrainingTranslateType[],
}

const SiteToolbar: React.FC<ToolbarProps> = ({
    activeLocale,
    titleDictionary,
    buttonDictionary,
    formDictionary,
    trainingCategoryTranslateData,
    trainingData,
    trainingTranslateData, }) => {
    const [showApplyButton, setShowApplyButton] = React.useState<boolean>(false);
    const [showTrainingButton, setShowTrainingButton] = React.useState<boolean>(false);
    const [showApplyCanvas, setShowApplyCanvas] = React.useState<boolean>(false);
    const [showTrainingCanvas, setShowTrainingCanvas] = React.useState<boolean>(false);

    const toggleApplyCanvas = React.useCallback(() => {
        setShowApplyButton(false);
        setShowApplyCanvas(!showApplyCanvas);
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = showApplyCanvas ? "auto" : "hidden";
        }
    }, [showApplyCanvas])
    const toggleTrainingCanvas = React.useCallback(() => {
        setShowTrainingButton(false);
        setShowTrainingCanvas(!showTrainingCanvas);
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = showTrainingCanvas ? "auto" : "hidden";
        }
    }, [showTrainingCanvas])

    const popularTrainings: TrainingType[] | undefined = trainingData.filter((data) => data.isPopular);
    return (
        <React.Fragment>
            <ToolbarButtonWrapper>
                <div className={`toolbar-button apply ${showApplyButton ? 'active' : ''}`} >
                    <div className="icon" onClick={() => setShowApplyButton(!showApplyButton)}>
                        <Image src='/icon/apply.png' width={36} height={26} alt='icon' />
                    </div>
                    <div className='label' onClick={toggleApplyCanvas}>{titleDictionary.apply}</div>
                </div>
                <div className={`toolbar-button training ${showTrainingButton ? 'active' : ''}`} >
                    <div className="icon" onClick={() => setShowTrainingButton(!showApplyButton)}>
                        <Image src='/icon/course.png' width={36} height={26} alt='icon' />
                    </div>
                    <div className='label' onClick={toggleTrainingCanvas}>{titleDictionary.popular_trainings}</div>
                </div>
            </ToolbarButtonWrapper>
            <ApplyCanvas
                activeLocale={activeLocale}
                showApplyCanvas={showApplyCanvas}
                toggleApplyCanvas={toggleApplyCanvas}
                titleDictionary={titleDictionary}
                buttonDictionary={buttonDictionary}
                formDictionary={formDictionary}
                trainingData={trainingData}
                trainingTranslateData={trainingTranslateData}
            />
            {
                (popularTrainings && popularTrainings.length > 0) ? (
                    <TrainingCanvas
                        activeLocale={activeLocale}
                        showTrainingCanvas={showTrainingCanvas}
                        toggleTrainingCanvas={toggleTrainingCanvas}
                        titleDictionary={titleDictionary}
                        trainingCategoryTranslateData={trainingCategoryTranslateData}
                        trainingData={popularTrainings}
                        trainingTranslateData={trainingTranslateData}
                    />
                ) : null
            }
        </React.Fragment>
    )
}

export default React.memo(SiteToolbar)

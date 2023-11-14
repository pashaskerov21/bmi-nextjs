import { TrainerTranslateType, TrainerType, TrainingTranslateType } from '@/src/types'
import React from 'react'
import { TrainingAccordionWrapper } from './style'
import { FaChevronDown } from 'react-icons/fa6'

type AccordionProps = {
    trainingTranslateData: TrainingTranslateType,
    trainerData: TrainerType[],
    trainerTranslateData: TrainerTranslateType[],
    titleDictionary: { [key: string]: string },
}

const TrainingAccordion: React.FC<AccordionProps> = ({
    trainingTranslateData,
    trainerData,
    trainerTranslateData,
    titleDictionary,
}) => {
    const [activeItem, setActiveItem] = React.useState<string>();
    const handleAccordionButton = (key: string) => {
        if (key !== activeItem) {
            setActiveItem(key)
        } else {
            setActiveItem('');
        }
    }
    return (
        <TrainingAccordionWrapper>
            <div className={`accordion-item ${activeItem === 'generalinfo' && 'active'}`}>
                <div className="accordion-button" onClick={() => handleAccordionButton('generalinfo')}>
                    <h3 className="title">ümumi məlumat</h3>
                    <button><FaChevronDown /></button>
                </div>
                <div className="accordion-body">
                    <div className="inner">
                        <div className="text">
                            {trainingTranslateData.generalInformation}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`accordion-item ${activeItem === 'content' && 'active'}`}>
                <div className="accordion-button" onClick={() => handleAccordionButton('content')}>
                    <h3 className="title">təlimin mündəricatı</h3>
                    <button><FaChevronDown /></button>
                </div>
                <div className="accordion-body">
                    <div className="inner">
                        <div className="text">
                            {trainingTranslateData.content}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`accordion-item ${activeItem === 'trainers' && 'active'}`}>
                <div className="accordion-button" onClick={() => handleAccordionButton('trainers')}>
                    <h3 className="title">təlimçilər</h3>
                    <button><FaChevronDown /></button>
                </div>
                <div className="accordion-body">
                    <div className="inner">
                        
                    </div>
                </div>
            </div>
            <div className={`accordion-item ${activeItem === 'payment' && 'active'}`}>
                <div className="accordion-button" onClick={() => handleAccordionButton('payment')}>
                    <h3 className="title">təlimin ödənişi</h3>
                    <button><FaChevronDown /></button>
                </div>
                <div className="accordion-body">
                    <div className="inner">
                        <div className="text">
                            {trainingTranslateData.payment}
                        </div>
                    </div>
                </div>
            </div>
        </TrainingAccordionWrapper>
    )
}

export default React.memo(TrainingAccordion)

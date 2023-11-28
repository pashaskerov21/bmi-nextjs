'use client'
import React from 'react'
import Link from 'next/link'
import { PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { FaChevronDown, FaLocationDot } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
import { CareerAccordion } from './style'
import { Breadcrumb, CareerDataType, CareerSectionProps, CareerTranslateDataType } from '@/src/types'

const CareerSection: React.FC<CareerSectionProps> = ({ activeLocale, titleDictionary, buttonDictionary, careerData, careerTranslateData }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/career`,
            name: titleDictionary.career,
        }
    ]
    const [activeItem, setActiveItem] = React.useState<number | null>(null);
    const handleAccordionButton = React.useCallback((key: number) => {
        if (key !== activeItem) {
            setActiveItem(key)
        } else {
            setActiveItem(null);
        }
    }, [activeItem])
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={titleDictionary.career}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <CareerAccordion>
                    {
                        careerData.map((data) => (
                            <React.Fragment key={data.id}>
                                <AccordionItem
                                    activeLocale={activeLocale}
                                    careerData={data}
                                    careerTranslateData={careerTranslateData}
                                    activeItem={activeItem}
                                    handleAccordionButton={handleAccordionButton}
                                    buttonDictionary={buttonDictionary} />
                            </React.Fragment>
                        ))
                    }
                </CareerAccordion>
            </Container>
        </Section>
    )
}

type CareerAccordionItemProps = {
    activeItem: number | null,
    activeLocale: string,
    careerData: CareerDataType,
    careerTranslateData: CareerTranslateDataType[],
    handleAccordionButton: (key: number) => void,
    buttonDictionary: { [key: string]: string },
}

const AccordionItem: React.FC<CareerAccordionItemProps> = ({ activeLocale, careerData, careerTranslateData, activeItem, handleAccordionButton, buttonDictionary }) => {
    const requiredTranslateData: CareerTranslateDataType | undefined = careerTranslateData.find((data) => data.lang === activeLocale && data.career_id === careerData.id);
    return (
        <React.Fragment>
            {
                requiredTranslateData ? (
                    <div className={`accordion-item ${(activeItem && activeItem === careerData.id) ? 'active' : ''}`}>
                        <div className="accordion-button" onClick={() => handleAccordionButton(careerData.id)}>
                            <div className='heading'>
                                <div className="title">{requiredTranslateData.title}</div>
                                <div className="bottom">
                                    <div className="item">
                                        <div className="icon">
                                            <FaLocationDot />
                                        </div>
                                        <div className="label">
                                            {requiredTranslateData.location}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <FaCalendarAlt />
                                        </div>
                                        <div className="label">
                                            {requiredTranslateData.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button><FaChevronDown /></button>
                        </div>
                        <div className="accordion-body">
                            <div className="inner">
                                <div className="text">
                                    {requiredTranslateData.text}
                                </div>
                                <Link className='apply-link' href={`/${activeLocale}/career/${encodeURIComponent(requiredTranslateData.title.toLocaleLowerCase())}`}>
                                    {buttonDictionary.apply}
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default React.memo(CareerSection)

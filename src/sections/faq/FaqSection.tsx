'use client'
import React from 'react'
import { PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { FaqAccordion } from './style'
import { faqData, faqTranslateData } from '@/src/data'
import { FaChevronDown } from 'react-icons/fa6'
import { Breadcrumb, FaqDataType, FaqSectionProps, FaqTranslateDataType } from '@/src/types'


const FaqSection: React.FC<FaqSectionProps> = ({ activeLocale, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/faq`,
            name: titleDictionary.faq,
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
                    titleDictionary={titleDictionary}
                    title={titleDictionary.faq}
                    breadcrumbs={breadcrumbs} />
                <FaqAccordion>
                    {
                        faqData.map((data) => (
                            <React.Fragment key={data.id}>
                                <AccordionItem
                                    activeLocale={activeLocale}
                                    faqData={data}
                                    faqTranslateData={faqTranslateData}
                                    activeItem={activeItem}
                                    handleAccordionButton={handleAccordionButton} />
                            </React.Fragment>
                        ))
                    }
                </FaqAccordion>
            </Container>
        </Section>
    )
}

type FaqAccordionItemProps = {
    activeItem: number | null,
    activeLocale: string,
    faqData: FaqDataType,
    faqTranslateData: FaqTranslateDataType[],
    handleAccordionButton: (key: number) => void,
}

const AccordionItem: React.FC<FaqAccordionItemProps> = ({ activeLocale, faqData, faqTranslateData, activeItem, handleAccordionButton }) => {
    const requiredTranslateData: FaqTranslateDataType | undefined = faqTranslateData.find((data) => data.lang === activeLocale && data.faq_id === faqData.id);
    return (
        <React.Fragment>
            {
                requiredTranslateData ? (
                    <div className={`accordion-item ${(activeItem && activeItem === faqData.id) ? 'active' : ''}`}>
                        <div className="accordion-button" onClick={() => handleAccordionButton(faqData.id)}>
                            <div className='title'>{requiredTranslateData.title}</div>
                            <button><FaChevronDown /></button>
                        </div>
                        <div className="accordion-body">
                            <div className="inner">
                                <div className="text">
                                    {requiredTranslateData.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default React.memo(FaqSection)

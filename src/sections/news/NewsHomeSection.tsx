'use client'
import React from 'react'
import Slider from 'react-slick'
import { NewsCard, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { newsSliderSettings } from '@/src/utils'
import { NewsSectionProps } from '@/src/types'

const NewsHomeSection: React.FC<NewsSectionProps> = ({ activeLocale, newsData, newsTranslateData, titleDictionary, buttonDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.news} />
        <Slider {...newsSliderSettings}>
          {
            newsData.map((data) => (
              <div className='slide-inner' key={data.id}>
                <NewsCard
                  activeLocale={activeLocale}
                  newsData={data}
                  newsTranslateData={newsTranslateData}
                  buttonDictionary={buttonDictionary} />
              </div>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default React.memo(NewsHomeSection)

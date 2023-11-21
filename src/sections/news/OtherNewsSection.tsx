'use client'
import { NewsCard, SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { NewsTranslateType, NewsType } from '@/src/types'
import { newsSliderSettings } from '@/src/utils'
import React from 'react'
import Slider from 'react-slick'

type NewsProps = {
  activeLocale: string,
  newsData: NewsType[],
  newsTranslateData: NewsTranslateType[],
  titleDictionary: { [key: string]: string },
  buttonDictionary: { [key: string]: string },
}

const OtherNewsSection: React.FC<NewsProps> = ({ activeLocale, newsData, newsTranslateData, titleDictionary, buttonDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.other_news} />
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

export default OtherNewsSection

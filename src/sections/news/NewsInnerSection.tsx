'use client'
import { PageTitle } from '@/src/components'
import { Container, Row, RowCol, Section } from '@/src/styles/utils'
import { Breadcrumb, NewsTranslateType, NewsType } from '@/src/types'
import React from 'react'
import { NewsContentWrapper } from './style'
import Image from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

type NewsProps = {
  activeLocale: string,
  newsData: NewsType,
  newsTranslateData: NewsTranslateType,
  titleDictionary: { [key: string]: string },
}

const NewsInnerSection: React.FC<NewsProps> = ({ activeLocale, newsData, newsTranslateData, titleDictionary }) => {
  const breadcrumbs: Breadcrumb[] = [
    {
      id: 1,
      name: titleDictionary.news,
      path: `/${activeLocale}/news`

    },
    {
      id: 2,
      name: newsTranslateData.title,
      path: `/${activeLocale}/news/${encodeURIComponent(newsTranslateData.title.toLocaleLowerCase())}`

    }
  ]
  return (
    <Section $py={20}>
      <Container>
        <PageTitle
          activeLocale={activeLocale}
          title={newsTranslateData.title}
          breadcrumbs={breadcrumbs}
          titleDictionary={titleDictionary} />
        <NewsContentWrapper>
          <Row $content='right'>
            <RowCol>
              <div className="content-image">
                <Image src={newsData.image} width={600} height={600} alt='' />
              </div>
            </RowCol>
            <RowCol>
              <div className="content">
                <h2 className="title">{newsTranslateData.title}</h2>
                <div className="icons">
                  <div className="item">
                    <FaCalendarAlt />
                    <span>{newsTranslateData.date}</span>
                  </div>
                  <div className="item">
                    <FaLocationDot />
                    <span>{newsTranslateData.location}</span>
                  </div>
                </div>
                <div className="text">
                  {newsTranslateData.text}
                </div>
              </div>
            </RowCol>
          </Row>
        </NewsContentWrapper>
      </Container>
    </Section>
  )
}

export default React.memo(NewsInnerSection)

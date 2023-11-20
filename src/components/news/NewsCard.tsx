import { NewsTranslateType, NewsType } from '@/src/types'
import React from 'react'
import { NewsCardWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'

type NewsCardProps = {
  activeLocale: string,
  newsData: NewsType,
  newsTranslateData: NewsTranslateType[],
  buttonDictionary: { [key: string]: string },
}

const NewsCard: React.FC<NewsCardProps> = ({ activeLocale, newsData, newsTranslateData, buttonDictionary }) => {
  const requiredTranslate: NewsTranslateType | undefined = newsTranslateData.find((data) => data.news_id === newsData.id && data.lang === activeLocale)
  return (
    <React.Fragment>
      {
        requiredTranslate ? (
          <NewsCardWrapper>
            <div className="image">
              <Image src={newsData.image} width={300} height={200} alt='' />
            </div>
            <div className="content">
              <h3 className="title">{requiredTranslate.title}</h3>
              <div className="text">
                {requiredTranslate.text.slice(0, 250) + ' ...'}
              </div>
              <Link href={`/news/${encodeURIComponent(requiredTranslate.title.toLocaleLowerCase())}`}>{buttonDictionary.details} ...</Link>
            </div>
          </NewsCardWrapper>
        ) : null
      }
    </React.Fragment>
  )
}

export default React.memo(NewsCard)

'use client'
import React from 'react'
import Slider from 'react-slick'
import { Section } from '@/src/styles/utils'
import { BannerSlide } from '@/src/components'
import { bannerSettings } from '@/src/utils'
import { BannerSectionProps } from '@/src/types'

const BannerSection: React.FC<BannerSectionProps> = ({ activeLocale, bannerData, bannerTranslateData, buttonDictionary }) => {

  return (
    <Section $mt_xl={20}>
      <Slider {...bannerSettings}>
        {
          bannerData.map((data) => (
            <React.Fragment key={data.id}>
              <BannerSlide
                activeLocale={activeLocale}
                slideData={data}
                bannerTranslateData={bannerTranslateData}
                buttonDictionary={buttonDictionary} />
            </React.Fragment>
          ))
        }
      </Slider>
    </Section>
  )
}

export default React.memo(BannerSection)

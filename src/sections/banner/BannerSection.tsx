'use client'
import React from 'react'
import { Section } from '@/src/styles/utils'
import { BannerTranslateType, BannerType } from '@/src/types'
import Slider from 'react-slick'
import { BannerSlide } from '@/src/components'
import { bannerSettings } from '@/src/utils'


type BannerSectionProps = {
  activeLocale: string,
  bannerData: BannerType[],
  bannerTranslateData: BannerTranslateType[],
  buttonDictionary: { [key: string]: string }
}

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

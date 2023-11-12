'use client'
import { Container, Row, RowCol, Section } from '@/src/styles/utils'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Locale } from '@/i18n-config'
import { BannerTranslateType, BannerType } from '@/src/types'
import Slider from 'react-slick'
import { BannerSlide } from '@/src/components'


type BannerSectionProps = {
  activeLocale: string,
  bannerData: BannerType[],
  bannerTranslateData: BannerTranslateType[],
  buttonDictionary: {[key:string]:string}
}

const BannerSection: React.FC<BannerSectionProps> = ({ activeLocale, bannerData, bannerTranslateData, buttonDictionary }) => {
  React.useEffect(() => { Fancybox.bind("[data-fancybox]", {}) }, [])

  var settings = {
    className: 'banner-slider',
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease"
  }
  return (
    <Section $mt_xl={20}>
      <Slider {...settings}>
        {
          bannerData.map((data) => (
            <React.Fragment key={data.id}>
              <BannerSlide activeLocale={activeLocale} slideData={data} bannerTranslateData={bannerTranslateData} buttonDictionary={buttonDictionary}/>
            </React.Fragment>
          ))
        }
      </Slider>
    </Section>
  )
}

export default React.memo(BannerSection)

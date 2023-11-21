'use client'
import { SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { PartnerType } from '@/src/types'
import { partnerSliderSettings } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

type PartnerProps = {
  titleDictionary: { [key: string]: string },
  partnerData: PartnerType[],
}

const PartnerSection: React.FC<PartnerProps> = ({ titleDictionary, partnerData }) => {
  return (
    <Section $py={20}>
      <Container>
        <SectionTitle title={titleDictionary.partners} />
        <Slider {...partnerSliderSettings}>
          {
            partnerData.map((data) => (
              <React.Fragment key={data.id}>
                <div className="slide-inner">
                  <Link href={data.url} target='_blank'>
                    <Image src={data.image} width={130} height={100} alt='customer' />
                  </Link>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
      </Container>
    </Section>
  )
}

export default React.memo(PartnerSection)

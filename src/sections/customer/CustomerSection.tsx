'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { SectionTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { customerSliderSettings } from '@/src/utils'
import { CustomerSectionProps } from '@/src/types'



const CustomerSection: React.FC<CustomerSectionProps> = ({ titleDictionary, customerData }) => {
    return (
        <Section $py={20}>
            <Container>
                <SectionTitle title={titleDictionary.customers} />
                <Slider {...customerSliderSettings}>
                    {
                        customerData.map((data) => (
                            <React.Fragment key={data.id}>
                                <div className="slide-inner">
                                    <Link href={data.url} target='_blank'>
                                        <Image src={data.image} width={150} height={150} alt='customer' />
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

export default React.memo(CustomerSection)

import { BannerTranslateType, BannerType } from '@/src/types'
import { Locale } from 'next/dist/compiled/@vercel/og/satori'
import React from 'react'
import { SlideWrapper } from './style'
import { Container, Row, RowCol } from '@/src/styles/utils'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'

type BannerSlideProps = {
    activeLocale: string,
    slideData: BannerType,
    bannerTranslateData: BannerTranslateType[],
    buttonDictionary: {[key:string]:string}
}


const BannerSlide: React.FC<BannerSlideProps> = ({ activeLocale, slideData, bannerTranslateData, buttonDictionary }) => {
    const requiredTranslate: BannerTranslateType | undefined = bannerTranslateData.find((data) => data.banner_id === slideData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            <SlideWrapper $bgImage={slideData.background}>
                <div className="content">
                    <Container>
                        <Row>
                            <RowCol>
                                <h1 className="title">{requiredTranslate?.title}</h1>
                                <Link className='detail' href={slideData.url}>{buttonDictionary.details}</Link>
                            </RowCol>
                            <RowCol>
                                <div className="video-item">
                                    <Image src={slideData.videoBG} width={200} height={120} priority={true} alt='' />
                                    <div className="hover">
                                        <Link href={slideData.videoURL} data-fancybox=''>
                                            <FaPlay />
                                        </Link>
                                    </div>
                                </div>
                            </RowCol>
                        </Row>
                    </Container>
                </div>
            </SlideWrapper>
        </React.Fragment>
    )
}

export default BannerSlide

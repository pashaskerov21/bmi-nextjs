import React from 'react'
import { SlideWrapper } from './style'
import { Container, Row, RowCol } from '@/src/styles/utils'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import { BannerSlideProps, BannerTranslateDataType } from '@/src/types'

const BannerSlide: React.FC<BannerSlideProps> = ({ activeLocale, slideData, bannerTranslateData, buttonDictionary }) => {
    const requiredTranslate: BannerTranslateDataType | undefined = bannerTranslateData.find((data) => data.banner_id === slideData.id && data.lang === activeLocale);
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

export default React.memo(BannerSlide)

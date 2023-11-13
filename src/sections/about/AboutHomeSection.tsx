'use client'
import { Container, Row, RowCol, Section } from '@/src/styles/utils'
import { AboutReportTranslateType, AboutReportType, AboutTranslateType, AboutType } from '@/src/types'
import React from 'react'
import { AboutContentWrapper, AboutImageWrapper, AboutReportWrapper } from './style'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'

type AboutProps = {
    activeLocale: string,
    aboutData: AboutType,
    aboutTranslateData: AboutTranslateType[],
    aboutReportData: AboutReportType[],
    aboutReportTranslateData: AboutReportTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const AboutHomeSection: React.FC<AboutProps> = ({ activeLocale, aboutData, aboutTranslateData, aboutReportData, aboutReportTranslateData, titleDictionary, buttonDictionary }) => {
    return (
        <Section $py={20} $py_xl={40}>
            <Container>
                <Row>
                    <RowCol>
                        <AboutContentWrapper>
                            <h1 className="title">{titleDictionary.why_us}</h1>
                            <div className="text">
                                <AboutText activeLocale={activeLocale} about_id={aboutData.id} aboutTranslateData={aboutTranslateData} buttonDictionary={buttonDictionary} />
                            </div>
                            <AboutReportWrapper>
                                {
                                    aboutReportData.map((data) => (
                                        <React.Fragment key={data.id}>
                                            <div className="icon">
                                                <Image src={data.icon} width={50} height={50} alt='icon' />
                                                <div className="info">
                                                    <span>{data.value}</span>
                                                    <span>
                                                        <ReportTitle activeLocale={activeLocale} report_id={data.id} aboutReportTranslateData={aboutReportTranslateData} />
                                                    </span>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))
                                }
                            </AboutReportWrapper>
                        </AboutContentWrapper>
                    </RowCol>
                    <RowCol>
                        <AboutImageWrapper>
                            <Image src={aboutData.videoBG} width={600} height={400} priority={true} data-fancybox='' alt='' />
                            <div className="hover">
                                <Link href={aboutData.videoURL} data-fancybox=''>
                                    <FaPlay />
                                </Link>
                            </div>
                        </AboutImageWrapper>
                    </RowCol>
                </Row>
            </Container>
        </Section>
    )
}


type TextProps = {
    activeLocale: string,
    about_id: number,
    aboutTranslateData: AboutTranslateType[],
    buttonDictionary: { [key: string]: string },
}
const AboutText: React.FC<TextProps> = ({ activeLocale, about_id, aboutTranslateData, buttonDictionary }) => {
    const requiredTranslate = aboutTranslateData.find((data) => data.about_id === about_id && data.lang === activeLocale);
    return (
        <React.Fragment>
            {requiredTranslate && requiredTranslate.text.length > 600 ? (
                <p>
                    {requiredTranslate.text.slice(0, 600)}... <Link href='/about'>{buttonDictionary.details}</Link>
                </p>
            ) : null}
        </React.Fragment>
    )
}
type TitleProps = {
    activeLocale: string,
    report_id: number,
    aboutReportTranslateData: AboutReportTranslateType[],
}
const ReportTitle: React.FC<TitleProps> = ({ activeLocale, report_id, aboutReportTranslateData }) => {
    const requiredTranslate = aboutReportTranslateData.find((data) => data.report_id === report_id && data.lang === activeLocale)
    return (
        <React.Fragment>
            {requiredTranslate ? requiredTranslate.title : null}
        </React.Fragment>
    )
}


export default React.memo(AboutHomeSection)

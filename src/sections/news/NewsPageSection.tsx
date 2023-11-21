'use client'
import { NewsCard, PageTitle } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, NewsTranslateType, NewsType } from '@/src/types'
import React from 'react'

type NewsProps = {
    activeLocale: string,
    newsData: NewsType[],
    newsTranslateData: NewsTranslateType[],
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const NewsPageSection: React.FC<NewsProps> = ({
    activeLocale,
    newsData,
    newsTranslateData,
    titleDictionary,
    buttonDictionary }) => {

    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.news,
            path: `/${activeLocale}/news`

        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    title={titleDictionary.news}
                    breadcrumbs={breadcrumbs}
                    titleDictionary={titleDictionary} />
                <Grid $col={4}>
                    {
                        newsData.map((data) => (
                            <React.Fragment key={data.id}>
                                <NewsCard
                                    activeLocale={activeLocale}
                                    newsData={data}
                                    newsTranslateData={newsTranslateData}
                                    buttonDictionary={buttonDictionary} />
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}

export default React.memo(NewsPageSection)

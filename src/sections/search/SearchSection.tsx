'use client'
import React from 'react'
import { CategoryCardContent, EventCard, NewsCard, PageTitle, TrainerCard, TrainingCardContent } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { redirect } from 'next/navigation'
import {  useSelector } from 'react-redux'
import {
    Breadcrumb,
    EventDataType,
    EventTranslateDataType,
    NewsDataType,
    NewsTranslateDataType,
    RootStateType,
    SearchSectionProps,
    SearchStateType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType, 
    TrainingTranslateDataType
} from '@/src/types'

const SearchSection: React.FC<SearchSectionProps> = ({ activeLocale, titleDictionary, buttonDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/search`,
            name: titleDictionary.search,
        }
    ]
    const searchData: SearchStateType = useSelector((state: RootStateType) => state.searchState);

    const trainingCategoryData: TrainingCategoryDataType[] | [] = searchData.traininCategoryDataState;
    const trainingCategoryTranslateData: TrainingCategoryTranslateDataType[] | [] = searchData.traininCategoryTranslateDataState;
    const trainingData: TrainingDataType[] | [] = searchData.trainingDataState;
    const trainingTranslateData: TrainingTranslateDataType[] | [] = searchData.trainingTranslateDataState;
    const trainerData: TrainerDataType[] | [] = searchData.trainerDataState;
    const trainerTranslateData: TrainerTranslateDataType[] | [] = searchData.trainerTranslateDataState;
    const eventData: EventDataType[] | [] = searchData.eventDataState;
    const eventTranslateData: EventTranslateDataType[] | [] = searchData.eventTranslateDataState;
    const newsData: NewsDataType[] | [] = searchData.newsDataState;
    const newsTranslateData: NewsTranslateDataType[] | [] = searchData.newsTranslateDataState;
    if (
        (trainingCategoryData.length > 0 && trainingCategoryTranslateData.length > 0)
        || (trainingCategoryTranslateData.length > 0 && trainingData.length > 0 && trainingTranslateData.length > 0)
        || (trainerData.length > 0 && trainerTranslateData.length > 0)
        || (eventData.length > 0 && eventTranslateData.length > 0)
        || (newsData.length > 0 && newsTranslateData.length > 0)
    ) {
        return (
            <Section $py={20}>
                <Container>
                    <PageTitle
                        activeLocale={activeLocale}
                        titleDictionary={titleDictionary}
                        title={titleDictionary.search}
                        breadcrumbs={breadcrumbs} />
                    <Grid $col={5}>
                        {
                            trainingCategoryData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <CategoryCardContent
                                        activeLocale={activeLocale}
                                        categoryData={data}
                                        categoryTranslateData={trainingCategoryTranslateData}
                                        buttonDictionary={buttonDictionary} />
                                </React.Fragment>
                            ))
                        }
                    </Grid>
                    <Grid $col={5}>
                        {
                            trainingData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <TrainingCardContent
                                        activeLocale={activeLocale}
                                        categoryTranslateData={trainingCategoryTranslateData}
                                        trainingData={data}
                                        trainingTranslateData={trainingTranslateData}
                                        buttonDictionary={buttonDictionary} />
                                </React.Fragment>
                            ))
                        }
                    </Grid>
                    <Grid $col={4}>
                        {
                            trainerData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <TrainerCard
                                        activeLocale={activeLocale}
                                        trainerData={data}
                                        trainerTranslateData={trainerTranslateData} />
                                </React.Fragment>
                            ))
                        }
                    </Grid>
                    <Grid $col={4}>
                        {
                            eventData.map((data) => (
                                <React.Fragment key={data.id}>
                                    <EventCard
                                        activeLocale={activeLocale}
                                        eventData={data}
                                        eventTranslateData={eventTranslateData} />
                                </React.Fragment>
                            ))
                        }
                    </Grid>
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
    } else {
        redirect(`/${activeLocale}/404`)
    }
}

export default React.memo(SearchSection)

'use client'
import { CategoryCardContent, EventCard, NewsCard, PageTitle, TrainerCard, TrainingCardContent } from '@/src/components'
import { RootStateType } from '@/src/redux/RootReducer'
import { SearchStateType } from '@/src/redux/reducer/SearchReducer'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, EventTranslateType, EventType, NewsTranslateType, NewsType, TrainerTranslateType, TrainerType, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from '@/src/types'
import { redirect } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

type SearchProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
    buttonDictionary: { [key: string]: string },
}

const SearchSection: React.FC<SearchProps> = ({ activeLocale, titleDictionary, buttonDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/search`,
            name: titleDictionary.search,
        }
    ]
    const searchData: SearchStateType = useSelector((state: RootStateType) => state.searchState);
    console.log(searchData)

    const trainingCategoryData: TrainingCategoryType[] | [] = searchData.traininCategoryDataState;
    const trainingCategoryTranslateData: TrainingCategoryTranslateType[] | [] = searchData.traininCategoryTranslateDataState;
    const trainingData: TrainingType[] | [] = searchData.trainingDataState;
    const trainingTranslateData: TrainingTranslateType[] | [] = searchData.trainingTranslateDataState;
    const trainerData: TrainerType[] | [] = searchData.trainerDataState;
    const trainerTranslateData: TrainerTranslateType[] | [] = searchData.trainerTranslateDataState;
    const eventData: EventType[] | [] = searchData.eventDataState;
    const eventTranslateData: EventTranslateType[] | [] = searchData.eventTranslateDataState;
    const newsData: NewsType[] | [] = searchData.newsDataState;
    const newsTranslateData: NewsTranslateType[] | [] = searchData.newsTranslateDataState;
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

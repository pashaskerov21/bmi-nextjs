import {
    EventDataType,
    EventTranslateDataType,
    NewsDataType,
    NewsTranslateDataType,
    TrainerDataType,
    TrainerTranslateDataType,
    TrainingCategoryDataType,
    TrainingCategoryTranslateDataType,
    TrainingDataType,
    TrainingTranslateDataType
} from "../data"

// locale state
export type LocaleStateType = {
    locale: string,
    slug: string,
}
// search state
export type SearchStateType = {
    traininCategoryDataState: TrainingCategoryDataType[] | [],
    traininCategoryTranslateDataState: TrainingCategoryTranslateDataType[] | [],
    trainingDataState: TrainingDataType[] | [],
    trainingTranslateDataState: TrainingTranslateDataType[] | [],
    trainerDataState: TrainerDataType[] | [],
    trainerTranslateDataState: TrainerTranslateDataType[] | [],
    eventDataState: EventDataType[] | [],
    eventTranslateDataState: EventTranslateDataType[] | [],
    newsDataState: NewsDataType[] | [],
    newsTranslateDataState: NewsTranslateDataType[] | [],
}

export type RootStateType = {
    searchState: SearchStateType,
    localeState: LocaleStateType[],
}
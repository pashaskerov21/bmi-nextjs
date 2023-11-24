// SearchReducer.ts
import { EventTranslateType, EventType, NewsTranslateType, NewsType, TrainerTranslateType, TrainerType, TrainingCategoryTranslateType, TrainingCategoryType, TrainingTranslateType, TrainingType } from "@/src/types"
import { SEARCH_DATA } from "../ActionTypes"
import { Reducer } from "react"

export type SearchStateType = {
    traininCategoryDataState: TrainingCategoryType[] | [],
    traininCategoryTranslateDataState: TrainingCategoryTranslateType[] | [],
    trainingDataState: TrainingType[] | [],
    trainingTranslateDataState: TrainingTranslateType[] | [],
    trainerDataState: TrainerType[] | [],
    trainerTranslateDataState: TrainerTranslateType[] | [],
    eventDataState: EventType[] | [],
    eventTranslateDataState: EventTranslateType[] | [],
    newsDataState: NewsType[] | [],
    newsTranslateDataState: NewsTranslateType[] | [],
}
const initialState: SearchStateType = {
    traininCategoryDataState: [],
    traininCategoryTranslateDataState: [],
    trainingDataState: [],
    trainingTranslateDataState: [],
    trainerDataState: [],
    trainerTranslateDataState: [],
    eventDataState: [],
    eventTranslateDataState: [],
    newsDataState: [],
    newsTranslateDataState: [],
}

const SearchReducer: Reducer<SearchStateType, any> = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA:
            return action.payload
        default:
            return state;
    }
}

export default SearchReducer;

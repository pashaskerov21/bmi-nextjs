import { SearchStateType } from "@/src/types"
import { SEARCH_DATA } from "../ActionTypes"
import { Reducer } from "react"


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

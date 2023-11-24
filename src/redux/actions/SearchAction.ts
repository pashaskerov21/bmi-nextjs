// SearchAction.ts
import { SEARCH_DATA } from "../ActionTypes"

export const pushSearchData = (data: any) => {
    return{
        type: SEARCH_DATA,
        payload: data,
    }
}

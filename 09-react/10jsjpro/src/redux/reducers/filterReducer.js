import {SET_FILTER} from '../constans'
let initState = {
    filter:'all'//默认为all
}
export default function filterXXX(state=initState,action){
    switch(action.type){
        case SET_FILTER:
            return{
                ...state,
                filter:action.data
            }
        default:
            return state
    }

}
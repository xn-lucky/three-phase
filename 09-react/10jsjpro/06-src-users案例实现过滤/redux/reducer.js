import {GET_USER,SET_FILTER} from './constans'
let initState = {
    users : [],
    filter:'all'//默认为all
}
export default function reducer(state=initState,action){
    switch(action.type){
        case GET_USER:
            
            return{
                ...state,
                users:action.data
            }
        case SET_FILTER:
            return{
                ...state,
                filter:action.data
            }
        default:
            return state
    }

}
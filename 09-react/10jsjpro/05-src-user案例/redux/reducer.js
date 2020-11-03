import {GET_USER} from './constans'
let initState = {
    users : []
}
export default function reducer(state=initState,action){
    switch(action.type){
        case GET_USER:
            
            return{
                ...state,
                users:action.data
            }
        default:
            return state
    }

}
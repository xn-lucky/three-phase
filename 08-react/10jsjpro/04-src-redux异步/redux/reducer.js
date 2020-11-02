import {ADD,DEC} from './contants'

let initState = {
    count:0
}

export default function reducer(state = initState ,action){
    
    switch(action.type){
        case ADD:
            return {
                count:state.count+action.data 
            }
        case DEC:
            return {
                count:state.count-action.data 
            }
        default:
            return state
    }

}

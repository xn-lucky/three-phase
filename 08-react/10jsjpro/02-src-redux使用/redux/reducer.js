/*
  创建reducer,是一个函数,处理逻辑的
*/
import {ADD} from './constants'
// 初始化state
let initState={
    count:0,
    msg:'初始化state'
}
export default function reducer(state = initState,action){
    console.log(state,action)
    switch(action.type){
        case ADD:
            return {
                ...state,
                count:state.count+action.data
            }
        //默认返回初始化的state
        default:
            return state
    }

}
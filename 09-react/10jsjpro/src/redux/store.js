import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import userXXX from './reducers/userReducer'
import filterXXX from './reducers/filterReducer'

// 调用combineReducers, 将多个reducers合并成一个
const rootReducer = combineReducers({
    // xxx就会作为redux中state里面的一个属性. 对应的值就是users这个reducer函数里面的值
    userXXX,
    // yyyy作为redux中state里面的一个属性. 对应的值就是filter这个reducer函数里面的值
    filterXXX
  })
// const store = createStore(reducer,applyMiddleware(thunk))
const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)))
export default store
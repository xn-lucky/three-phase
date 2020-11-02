/* 
  管理数据
*/
// 1/创建
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


const store = createStore(reducer,applyMiddleware(thunk))

export default store
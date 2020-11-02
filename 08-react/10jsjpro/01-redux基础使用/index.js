import React from "react";
import ReactDOM from "react-dom";

import {createStore} from 'redux'

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//给state一个初始值
let initState = {count:1}



//reducer函数中有两个参数,数据和需求
function reduce(state = initState,action){
    //固定格式
    switch(action.type){
        case 'ADD':
             return state.count +2
        default:
             return state
    }  
}

//创建store,添加需要管理的reducer函数
const store = createStore(reduce)

//store和reducer的关系连接起来了，然后现在store准备给reducer分配任务，触发reducer并将action交给他
// 创建一个action
const inAction = ()=>({type:'ADD',num:1})
// console.log(inAction)

store.dispatch(inAction())

console.log(store.getState())
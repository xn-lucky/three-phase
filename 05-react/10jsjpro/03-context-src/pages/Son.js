import React, { Component } from 'react'

import context from '../context'

// const {Provider,Consumer} = context

export default class Son extends Component {
    static contextType = context
    render() {
        return (
            <div>
                Son组件{this.context}
            </div>)
        {/* 
            方法一的写法,有点麻烦
            <Consumer>{data=> <div>
            Son组件,{data}
        </div>}</Consumer> */}
    
        
    }
}

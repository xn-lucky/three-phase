import React, { Component } from 'react'


/* 组件，计时器 */
export default class Timer extends Component {
    handle=()=>{
        //这边执行点击按钮执行+1功能
        //调用store的dispatch传入action
        // this.props.dispatch({type:'ADD',data:1})
        // this.props.increment()
        // console.log(this.props)
        this.props.add(1)
    }
    handleAsync = ()=>{
        this.props.addAsync(-2)
    }
    render() {
        // console.log(this.props)
        return (
            <>
              <div>
                {/* 获取redux中的state数据 */}
                {this.props.count}
              </div>
              <button onClick={this.handle}>点击+1</button>
              <button onClick={this.handleAsync}>异步-2</button>
            </>
        )
    }
}




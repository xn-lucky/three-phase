import React, { Component } from 'react'

export default class Timer extends Component {
    handle = ()=>{
      console.log(this.props)
    // this.props.dispatch(add(2))
    this.props.add(3)
    }
    handledec= ()=>{
        this.props.dec(2)
    }
    handleAsyncInc=()=>{
        this.props.asyncInc(1)
    }
    render() {
        return (
            <>
             <div>
                计时器{this.props.count}
             </div>
             <button onClick={this.handle}>点击+3</button>
             <button onClick={this.handledec}>点击-2</button>
             <button onClick={this.handleAsyncInc}>点击异步+1</button>
            </>
        )
    }
}

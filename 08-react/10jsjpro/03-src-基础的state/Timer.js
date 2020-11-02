import React, { Component } from 'react'

export default class Timer extends Component {
    state={
        count:0
    }
    handle=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <>
             <div>
                计时器{this.state.count}
             </div>
             <button onClick={this.handle}>点击+1</button>
            </>
        )
    }
}

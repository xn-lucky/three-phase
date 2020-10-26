//类组件
import React from 'react'
//引入app.js
import Header from './APP'
export default class title extends React.Component{
    constructor(){
        super()
        this.state = {
            count:1
        }
    }

    handleCount(){
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
        return (<div>
            <h2>类组件</h2>
            <p>类组件的p标签</p>
            <Header/>
            <h3 title={'我是state'}>{this.state.count}</h3>
            <button onClick={()=>{
                this.handleCount()
            }}>点击state增加</button>
        </div>)
    }
}


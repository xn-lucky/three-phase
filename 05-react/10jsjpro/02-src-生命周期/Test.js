import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log('Test------constructor阶段')
    }
    render() {
        console.log('Test------render阶段')
        return (
            <div>
                Test组件{this.state.count}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>按钮改变state</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('Test------创建阶段完成阶段')
    }
    componentDidUpdate(preProps,preState){
        //更新阶段有两个参数表示的上一次的props和state的值
        console.log(preProps,preState)
        console.log('Test------state更新啦~~~')
    }
    componentWillUnmount(){
        console.log('Test------组件在页面去掉了~~~')
    }
    
}

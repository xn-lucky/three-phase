import React, { Component } from 'react'

export default class Position extends Component {
    //这个组件中的代码进行复用
    state={
        x:'',
        y:''
    }

    handleMove = (e)=>{
        //获取鼠标的坐标
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }

    //在组件创建完成的时候绑定事件
    componentDidMount(){
        window.addEventListener('mousemove',this.handleMove)
    }
    //在组件卸载的时候，清除事件
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.handleMove)
    }

    render() {
         {/* 使用第一种写法 */}
        // return this.props.render(this.state)
         {/* 使用第二种写法 ,通过this.props.children可以获取到组件中的子节点，这里子节点为函数*/}
        return this.props.children(this.state)
    }
}

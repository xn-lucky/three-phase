/* 
   每行数据li
 
*/
import React, { Component } from 'react'


import './index.css'

export default class Item extends Component {
    //如果数据的显示与隐藏跟别的组件没有关联性，只当前组件有用，则只需要在当前组件设置state数据即可
    state={
        isShow:false//判断是否显示删除按钮
    }


    //鼠标移入事件，显示
    handleMouseEnter=()=>{
        this.setState({
            isShow:true
        })
    }
    //鼠标移出事件
    handleMouseLeave=()=>{
        this.setState({
            isShow:false
        })
    }
    //当复选框的值改变的时候发生的事件
    handleChange=()=>{

    }
    //删除按钮绑定点击事件
    clickDel=(e)=>{
        // 获取事件源 找到数据，进行删除，同时也是要修改App中的state中的todos数据
        console.log(e.target)


    }

    render() {
        //接收list传过来的每条数据item
        // console.log(this.props.item)
        //结构赋值
        const {item} = this.props
        return (
            /* 当鼠标移入时，删除按钮要显示出来，鼠标移出是要隐藏，所以给li绑定事件 */
            <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <label>
                  <input type="checkbox" checked={item.isDone} onChange={this.handleChange}/>
                  <span>{item.todoName}</span>
                </label>
                <button className="btn btn-danger" style={{display:this.state.isShow?'block':'none'}} onClick={this.clickDel}>删除</button>
           </li>
        )
    }
}

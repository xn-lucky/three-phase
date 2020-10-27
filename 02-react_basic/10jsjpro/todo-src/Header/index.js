/* 
  头部文件
*/
import React, { Component } from 'react'

//引入css
import './index.css'

export default class Header extends Component {
    //头部数据通过状态设置和获取
    state={
        todoName:''
    }

    //处理值得问题
    handle=(e)=>{
        //设置值
        const value = e.target.value;
        this.setState({
            /* 这边去空格,使空格输入不了 */
            todoName:value.trim()
        })
    }
    addTodo = (e)=>{
      /* 
        - 键盘抬起事件，判断是回车键处理数据
        - 回车键按下后，希望在输入框写下的数据可以添加到app页面中的state中的todos中（这样页面中就可以渲染数据，页面上数据显示也会增加），但是修改数据一般都是在本页面去调用thissetState进行修改的，所以希望是在这个组件header中可以将数据传递给App中
        - 但是现在只有父元素传递数据给子元素，但是子元素是无法传数据给父元素的

        -- 可以使用函数的方法，就是在父元素中创建一个函数fn,将这个函数传递给子元素，子元素进行调用，调用的时候传递实参（即增加的数据），这样在父元素中，执行函数的时候，可以获取到传过来的实参，对数据进行修改
      */
     //判断如果是按下了回车键并抬起
     if(e.keyCode === 13){
         //需要判断输入的值是否为空(或者直接输入回车的时候，也不能添加数据)，不为空才可以添加，否则不执行下面的代码
          if(!this.state.todoName)return
        //   console.log(Boolean(this.state.todoName))
         this.props.addtodos(this.state.todoName)
         //处理完增加数据之后,要将输入框的值清空,直接设置状态中的值即可
         this.setState({
             todoName:''
         })
     }
      
    }
    render() {
        console.log('header---',this.props.list)
        return (
            <div className="todo-header">
                {/* 按键回车后，希望输入的值可以添加到列表中，所以给输入框绑定一个回车键的键盘事件 */}
               <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={this.state.todoName} onChange={this.handle} onKeyUp={this.addTodo}/>
            </div>
        )
    }
}

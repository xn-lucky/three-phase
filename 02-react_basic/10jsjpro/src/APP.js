/* 
  根目录文件
*/
import React, { Component } from 'react'

//引入Header
import Header from './Header/index'
//引入List
import List from './List/index'
//引入Footer
import Footer from './Footer/index'

//引入css
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {
        id:1,
        todoName:'小红',
        isDone:false//判断是否勾选
      },
      {
        id:2,
        todoName:'小橙',
        isDone:true//判断是否勾选
      },
      {
        id:3,
        todoName:'小蓝',
        isDone:false//判断是否勾选
      }
    ]
  }

  //函数处理，当输入框输入数据按下回车时，数据添加到列表中
  addtodos=(todoName)=>{
    console.log(todoName)
    //获取到值后，创建一个对象，再将对象值插入到数组中
    const obj = {
      id:this.state.todos.length + 1,
      todoName,
      isDone:false
    }
    //虽然这个结果是可以的，但是尽量还是不要修改原来数组中的值
    // this.state.todos.push(obj)

    //创建一个新数组接收
    const newArr = [...this.state.todos];
    newArr.push(obj)

    //修改state中的数组值
    this.setState({
      todos:newArr
    })
  }
    render() {

        return (
           <div className="todo-container">
              <div className="todo-wrap">
                <Header addtodos={this.addtodos}></Header>
                {/* 想要将数据展示出来,将数据传给list */}
                <List list={this.state.todos}></List>
                <Footer></Footer>
              </div>
           </div>
        )
    }
}

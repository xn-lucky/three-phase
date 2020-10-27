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
  addtodos= todoName =>{
    // console.log(todoName)
    let {todos} = this.state
    //id保证每条数据都不一样,获取最后一条数据的id 进行加1,
    //判断数组中是否有数据,有数据就获取最后一条数据的id+1,没有就设置当前数据的id为1
    const id = todos.length?todos[todos.length-1].id+1:1
    //获取到值后，创建一个对象，再将对象值插入到数组中
    const obj = {
      id,
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
  updatetodo = id=>{
    // console.log(id)
    //获取到item传过来的id后，对数据进行修改
    // 找到id对应的数据
    const newArr = [...this.state.todos]
    newArr.forEach(item=>{
      if(item.id===id){
        // let flag = item.isDone
        item.isDone=!item.isDone
      }
    })

    //修改值
    this.setState({
       todos:newArr
    })

  }
  deltodo = id=>{
    // console.log(id)
    //获取到item传过来的id后，对数据进行删除
    // 找到id对应的数据
    let newArr = [...this.state.todos]
    newArr = newArr.filter(item=>{
      return item.id !== id
    })

     //修改值
     this.setState({
      todos:newArr
   })
  }

  allCheck= ()=>{
    //判断此时的footer中的复选框的状态
    //判断此时list中的数据，如果全部勾选了，则footer中的复选框就是勾选状态,如果有一个未勾选，则footer中的复选框就是未勾选状态
    //数组的every方法（若数组中的每条数据都满足条件，就返回true）
    let {todos} = this.state
    let newArr = [...todos]
    //获取的是当前的footer中的复选框的值
    let checkFalg = newArr.every(item=>item.isDone)

    //修改每个数据的isDone
    newArr.forEach(item=>{
      item.isDone=!checkFalg
    })

    //设置值
    this.setState({
      todos:newArr
    })
  }

  delHasCheck = ()=>{
    //点击footer中的清除已完成按钮，删除已完成的数据
    let {todos} = this.state
    let newArr = [...todos]
    //获取没有勾选的数据
    newArr = newArr.filter(item=>!item.isDone)

    //设置值
    this.setState({
      todos:newArr
    })
  }
    render() {
      //获取已勾选的数据长度和所有的数据
      const allTotal = this.state.todos.length
      //filter方法返回为true的数据所以可以直接写return item.isDone
      const hasCheck = this.state.todos.filter(item=>item.isDone).length

        return (
           <div className="todo-container">
              <div className="todo-wrap">
                <Header addtodos={this.addtodos} list={List}></Header>
                {/* 想要将数据展示出来,将数据传给list */}
                <List list={this.state.todos} updatetodo={this.updatetodo} deltodo={this.deltodo}></List>
                <Footer allTotal={allTotal} hasCheck={hasCheck} allCheck= {this.allCheck} delHasCheck={this.delHasCheck}></Footer>
              </div>
           </div>
        )
    }
}

//类组件
import React from 'react'
//引入app.js
import Header from './APP'
export default class title extends React.Component{
    /* constructor(){
        super()
        this.state = {count:1}
    } */
    /* 
      第三种写法不需要constructor,es7草案中，提案，如果要给当前类实例添加属性,就不需要写constructor,使用下面的语法
    */
   state={
    count:1
   }
   /*
     这样定义函数,是直接添加到了当前组件的实例身上
     注意：虽然es7草案的语法，但是因为脚手架中使用了babel，所以可以放心使用
   */
   handleCount = ()=>{
    console.log('this指向',this)
    this.setState({
        count:this.state.count+1
    })
   }

  /* 第二种写法的函数 
    handleCount(){
        console.log(this)
        this.setState({
            count:this.state.count+1
        })
    } */
  



    render(){
        return (<div>
            <h2>类组件</h2>
            <p>类组件的p标签</p>
            <Header/>
            <h3 title={'我是state'}>{this.state.count}</h3>
            {/*第三种写法 底层是对象方法调用,所以这个函数里的this,一定指向当前组件实例 */}
            <button onClick={this.handleCount}>点击state增加</button>
            {/* 第二种写法，将调用的函数提取出来，这下面的箭头函数是事件函数,里面的调用是对象属性调用方式,所以this指向实例对象 
            <button onClick={()=>{
               this.handleCount();
            }}>点击state增加</button> */}

            {/*原始的写法，把函数提出来写 
              <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>点击state增加</button> */}
        </div>)
    }
}


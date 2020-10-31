import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (  
            <div>
                Home主页
                <button onClick={
          ()=>{
              //被Route渲染的组件才能在props中获取到history和location和match对象
            // console.log(this.props)
            this.props.history.push('/detail')
          }
        }> 点击跳转详情页</button>
            </div>
            
        
          
        )
    }
}

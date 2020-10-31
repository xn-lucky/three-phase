import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Route} from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './app.css'

export default class App extends Component {
  render() {
    return (
      //Router只使用一次，用于包裹整个应用
      <Router>
      <div>
       {/* 编程式导航,使用js代码来实现跳转页面 */}
       <NavLink to={'/home'}>首页</NavLink>
       <NavLink to={'/Detail'}>Detail</NavLink>

        {/* Route中的path与地址栏中的地址比较 */}
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>


        
      </div>
      </Router>
    )
  }
}

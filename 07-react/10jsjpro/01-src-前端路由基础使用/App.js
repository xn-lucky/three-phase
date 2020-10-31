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
        {/* Link组件相当于a标签,但是Link不会发送请求到服务器 */}
       {/*  <Link to={'/home'}>首页</Link>
        <Link to={'/detail'}>Detail</Link> */}
        {/* navLink跟Link类似，区别是navLink会有一个类名active,用于高亮效果 */}
        <NavLink to={'/home'}>首页</NavLink>
        <NavLink to={'/detail'}>Detail</NavLink>

        {/* Route中的path与地址栏中的地址比较 */}
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
        
      </div>
      </Router>
    )
  }
}

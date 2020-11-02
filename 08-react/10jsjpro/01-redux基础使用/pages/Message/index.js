import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/home/message/1'}>message001</Link>
            {/* <a href='/home/message/1'>message001</a> */}
          </li>
          <li>
            <Link to={'/home/message/2'}>message002</Link>
            {/* <a href='/home/message/2'>message002</a> */}
          </li>
          <li>
            <Link to={'/home/message/3'}>message003</Link>
            {/* <a href='/home/message/3'>message003</a> */}
          </li>
        </ul>
        <button onClick={
          ()=>{
            this.props.history.push('/home/message/4')
          }
        }>添加</button>
        <button onClick={
          ()=>{
            this.props.history.replace('/home/message/5')
          }
        }>替换</button>
        {/* <Detail></Detail> */}
        <Route path='/home/message/:id' component={Detail}></Route>
      </div>
    )
  }
}

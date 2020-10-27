/* 
  入口文件
*/
import React from 'react'
import ReactDOM from 'react-dom'

/* //引入app.js
import Header from './APP' */
import Data from './class'

//创建一个react元素
const h1 = <h1>我是脚手架创建的文件</h1>

const div = <div>{h1}<Data></Data></div>
ReactDOM.render(div,document.querySelector('#root'))


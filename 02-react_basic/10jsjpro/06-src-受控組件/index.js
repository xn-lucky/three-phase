/* 
  入口文件
*/
import React from 'react'
import ReactDOM from 'react-dom'

//引入app.js
import App from './APP'

//创建一个react元素
const h1 = <h1>我是脚手架创建的文件</h1>

const div = <div>{h1}<App></App></div>
ReactDOM.render(div,document.querySelector('#root'))


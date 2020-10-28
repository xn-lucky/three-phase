import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'

import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Mouse></Mouse>
        <Cat></Cat> */}
      {/* 使用第一种写法 */}
      {/* <Position render={state=><Mouse state={state}></Mouse>}></Position>
      <Position render={state=><Cat state={state}></Cat>}></Position> */}
       {/* 使用第二种写法  类似consumer */}
    <Position>{state=><Mouse state={state}></Mouse>}</Position>
    <Position>{state=><Cat state={state}></Cat>}</Position>

      </div>
    )
  }
}

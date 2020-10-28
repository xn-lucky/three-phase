import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'
import usePosition from '../myHooks'

export default function Cat(){
  // render() {
    // let { x, y } = this.props.state
    //调用自定义的函数，获取x,y的值
    let {x,y} = usePosition()
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={CatUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  
}

import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../myHooks'

export default function Mouse(){
  // render() {
    // let { x, y } = this.props.state
    const {x,y} = usePosition()
    return (
      <div>
        <img
          src={MouseUrl}
          alt=''
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  // }
}

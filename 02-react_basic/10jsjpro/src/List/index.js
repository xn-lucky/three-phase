/* 
  list列表
*/
import React, { Component } from 'react'
import Item from '../Item/index'

//引入css
import './index.css'

export default class List extends Component {
    render() {
        //接收App传过来的数据
       console.log(this.props)
        return (
            <ul className="todo-main">
                {/* 将传过来的数据循环遍历 */}
                {
                    this.props.list.map(item=>{
                       return <Item key={item.id} item={item}></Item>
                    })
                }
            </ul>
        )
    }
}

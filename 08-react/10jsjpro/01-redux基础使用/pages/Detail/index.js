import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    //使用Route包裹的组件可以使用this.props中的history,location,match对象
  return <h5>detail的内容~~~{this.props.match.params.id}</h5>
  }
}

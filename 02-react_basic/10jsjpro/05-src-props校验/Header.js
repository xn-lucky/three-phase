//类组件
import React from 'react'

//引入props校验所依赖的包
import PropTypes from 'prop-types'

export default class Header extends React.Component{
   state={
    count:1
   }

    render(){
        //接收函数组件传过来的数据
        // console.log(this.props.msg)
    return <div>{'类组件'+this.props.msg}</div>
    }
}

//添加Header参数的校验规则
Header.propTypes = {
    name:PropTypes.string,
    list: PropTypes.array.isRequired,//传过来的list是一个数组且必填
    gender: PropTypes.oneOf(['男', '女']),//传过来的gender在两个中选择其中一个值
    obj: PropTypes.shape({
        color: PropTypes.string.isRequired,//这个参数为必传
        fontSize: PropTypes.number
      })//传进来一个特定结构的数据
}
//添加默认属性
Header.defaultProps = {
    name:'lili'//这边定义默认属性,若有传值，则会覆盖这个属性，没有传值则显示这个属性，通过也可以通过props校验
}


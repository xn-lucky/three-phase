import {GET_USER,SET_FILTER} from './constans'
import axios from 'axios'

function getUser(data){
    return {type:GET_USER,data}
}

/* 异步请求 */
function asyncGetUser(searchName){
    return dispatch=>{
        //进行请求
        axios.get('http://127.0.0.1:5000/search/users',
        {params:{searchName}})
        .then((res)=>{
            //res就是返回来的数据
            // res.data.items就是数组
            // console.log(res)
            // 将数组保存在redux中
            dispatch(getUser(res.data.items))
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

/* 修改filter,同步请求 */
function setFilter(data){
    return {type:SET_FILTER,data}
}
export {getUser,asyncGetUser,setFilter}
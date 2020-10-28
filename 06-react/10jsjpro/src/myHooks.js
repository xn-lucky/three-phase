/* 
  自定义Hooks
*/
import React,{useState,useEffect} from 'react'

export default function usePosition(){
     //定义状态
     const [x,setX] = useState(0)
     const [y,setY] = useState(0)

     //绑定事件
     useEffect(()=>{
         //因为第二个参数传了一个空数组,所以这个里面只执行componentDidMount
         window.addEventListener('mousemove',handle)
         return ()=>{
             //做清除工作,解除事件
             window.removeEventListener('mousemove',handle)
         }
     },[])

     //定义个普通函数
     function handle(e){
         //修改状态值
         setX(e.clientX)
         setY(e.clientY)
     }
    //返回x,y的值,在需要x,y的值的地方调用这个hook函数,返回值就是包含x,y的数据的对象
     return {x,y}

}
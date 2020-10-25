import '@babel/polyfill'; // 包含ES6的高级语法的转换
//引入模块
import { foo, bar } from './module1'
import { add, mul } from './module2'
import msg from './module3'

//导入json
// 1. json中不需要导出
// 2. 导入的时候,按照默认导出的方式导入
import data from '../json/data.json'

//引入css文件
import '../css/index.css'
//引入less文件
import '../less/app.less'
//引入字体图标的less
import '../less/iconfont.less'

foo()
bar()
console.log(add(1, 2))
console.log(mul(1, 2))
console.log(msg.getMsg())
msg.setMsg('hehe')
console.log(msg.getMsg())

console.log(data)
const fn = ()=>{
    console.log(123456);
}
fn();
// console.log(a)
/* 
  入口文件（应用的主js）
*/
//导入module1
const module1 = require('./module1')
//导入module2
const module2 = require('./module2')
//导入module3
const module3 = require('./module3')

module1.foo()
module2()
module3.bar();

console.log(1);
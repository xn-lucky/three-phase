/* let arr = [2,3,4,8,7,3,2,1,8,4];

let d = arr.filter((item,index)=>{
    console.log(item,index)
    return arr.lastIndexOf(item) != index
})

console.log(d)
console.log(arr) */
// http://www.baidu.com?username=xiaowang&password=12345&age=18&sex=女&score=90
/* 
let str = 'http://www.baidu.com?username=xiaowang&password=12345&age=18&sex=女&score=90'

let newStr = str.split('?')[1];
let obj = newStr.split('&').reduce((p,c)=>{
    p[c.split('=')[0]] = c.split('=')[1];
    return p
},{})

console.log(obj)

let Arr = []
//for in 循环
for(let i in obj){
    let objStr= i+'='+obj[i]
    Arr.push(objStr)

}
let Str =Arr.join('&') 
console.log(Str)
 */


function GetArrayMost(arr){
    var arrMap = new Map();
    var key = arr[0],
        value = 1;
    arr.forEach((item, index) => {
        //将数组中的每个值,值和出现的次数放在map集合中
      if (arrMap.get(item) !== undefined) {
        let num = arrMap.get(item);
        arrMap.set(item, ++num);
      } else {
        arrMap.set(item, 1);
      }

      //算出出现次数最多的
      if (arrMap.get(item) > value) {
        key = item;
        value = arrMap.get(item);
      }
    });
    return [key,value];
}


var arr = [1,2,3,4,5,6,7,1,12,3,3,3,3,3,3,3,3,3]
console.log(
  "次数最多的元素为:",
  GetArrayMost(arr)[0],
  ",次数为:",
  GetArrayMost(arr)[1]
);


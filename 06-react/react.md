### React 

   - 是一个用于构建用户界面的javaScript库

   - 特点：
      * 声明式(jsx)，React.createElement() 是命令式
      * 组件化
        *

    - 基本使用

      - 创建一个id为root的根标签`<div id='root'></div>`

      - 引入react构建页面所依赖的js包

        - 先引入react（react的核心api）, 后引react-dom(操作dom的api)。

      - 命令式创建react元素（不是真正的dom元素,是React元素(虚拟dom)）

        ```js
        /* 命令式创建react元素
        第一个参数:标签名
        第二个参数:是设置你创建的元素的属性，比较特殊的属性class和label标签的for属性应该写成className和htmlFor,如果没有属性要使用null占位
        第三个参数及后面的:子节点
        */
        // const title = React.createElement('h1',null,'hello React');
        const title = React.createElement('h1',{className:'box'},'hello React');
        //渲染到页面（将React元素转成真正的dom元素，然后渲染到页面上）
        //ReactDOM.render(react元素/组件,渲染的位置)
        ReactDOM.render(title,document.querySelector('#root'));
        ```

    - #### JSX

       -- JSX是JavaScript XML,是React提供的Syntax Sugar(语法糖),能让我们可以在JS中写html标记语言。

​       -- 浏览器并不认识jsx,所以需要引入babel(@babel/preset-react)将jsx编译成 React.createElement的形式

- **基本使用**

​       -- 引入babel.min.js包

​       -- js代码写入的script中的type属性值应为text/babel,被babel编译后的代码是严格模式下的。

```html
 <div id="root"></div>
    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.min.js"></script>
    <script type="text/babel">
    //创建元素
    const h1 = <h1> 我是jsx创建的</h1>
    //渲染
    ReactDOM.render(h1,document.querySelector('#root'));
 
    </script>
```

- **插入数据** 

  -- 如果要在jsx中插入数据,可以直接在要插入数据的地方写{}(插值表达式)

   -- 插值表达式中,可以写任意类型的表达式

  -  ** 常见的表达式：字面量,变量,常量,数组,函数,对象,运算,三元,注意不能写if和循环语句

  -- 如果要给属性设置值，直接将值写成{}

     **注意的是: 插值表达式中,可以传入对象和函数,但是不能直接去渲染，如果渲染的时候,插值表达式写了对象和函数,就会报错。因为react不知道如何将对象和函数渲染到页面上,如果要写对象,应该是一个react元素**

  ```js
         //插入数据
          let data = 'giaogiaogiao'
          let data1 = {name:'lili'}

          //会报错,{}中写了对象，react不知道怎么去渲染
          const p = <p style={{color:'red'}}>{data1}</p>
          ReactDOM.render(p,document.querySelector('#root'));

           //这种写法可以,插入一个react元素
          /* const h2 = <h1 title={'我是h1标签'}>{<span>123</span>}</h1>
          ReactDOM.render(h2,document.querySelector('#root')); */
  ```

- **条件渲染** 

  ```js
    let age = 17
              // 工作中经常使用与逻辑实现条件判断
            // 注意: 如果是有条数据,不是渲染a,就是渲染b的时候,应该使用if或三元
            // 还有一些情况是,有一条数据,要么是渲染,要么就不渲染

              // 需求: 如果大于18岁,展示酒的信息
              let arr = ['红酒', '黄酒', '白酒', '啤酒', '鸡尾酒']
              const h1 = <h1>{age >= 18 && arr}</h1>

              ReactDOM.render(h1, document.getElementById('root'))
  ```

- **列表渲染** 

  -- react列表的渲染,都是使用数组的map方法,得到一个包含了jsx标签的数组,直接渲染这个数组实现

   -- 在执行map的过程中,最外表的那个标签必须要加一个key属性,属性的值要求是唯一的。

  ```js
  let arr = [{
                  name: '呸hua',
                  age: 38,
                  gender: '不详细',
                  hobby: '抽烟喝酒植发'
              },{ name: '静哥',
                  age:48,
                  gender: '男',
                  hobby: '京城会所'}]
               //可以渲染的形式,要是数组中的每个元素都是jsx标签
              // let arr1 = [<li>Peihua</li>, <li>jg</li>]

              const arr1 = arr.map((item,index)=>{
                  return <li key={index}><div>名字: {item.name}</div><div>年龄: {item.age}</div><div>性别: {item.gender}</div><div>爱好: {item.hobby}</div></li>
              })

              let ul = <ul>{
                 arr1
              }</ul>

              ReactDOM.render(ul, document.getElementById('root'))
  ```

- **样式处理** 

  -- 行内样式 : 若样式是数值,可以省略单位。

  ```js
  <div style={ { color: 'red', fontSize: 30 } }>web</div>
  ```

   -- **类名(推荐使用)**

  ```js
   <div className="abc">web</div>
  ```

  **注意的是**

    -- React元素的属性名使用小驼峰命名法

    -- 没有子节点的React元素可以写成自闭式和标签形式

- **事件处理** 

  -- React中的事件对象叫做：合成事件(兼容所有浏览器,无需担心跨浏览器兼容性问题)

  --**注意的是**

  ​    ** react-jsx中注册事件,事件名和dom中是一样的.只是需要写成小驼峰命名法。

  ​    ** react中事件处理函数不能使用return false阻止默认事件行为,需要使用事件对象的                                          preventDefault()实现。

  ​    ** 如果在控制台打印事件对象,属性值都是null，如果一定要看的话,调用事件对象.presist()方法。

  ```js
  <script type="text/babel">
          let link = <a href='' onClick={(e)=>{
              console.log('被点击了');
               
              // 阻止默认事件, 在react中不能使用return false阻止默认事件
              e.preventDefault();
              //注意的是：默认在控制台，打印事件对象，看不到属性的值，但是可以通过代码获取到，如果非要在控制台看，调用persist（这个函数就可以） 
              e.persist();
          }}>点击我</a>

          //渲染
          ReactDOM.render(link,document.querySelector('#root'))

          </script>
  ```

- React案例

  ```js
  <script type='text/babel'>
                /* 
                  实现评论列表功能

                  - 如果有评论数据，就展示列表结构 li（ 列表渲染 ）要包含a标签
                  - name 表示评论人，渲染 h3
                  - content 表示评论内容，渲染 p
                  - 如果没有评论数据，就展示一个 h1 标签，内容为： 暂无评论！
                  - 根据自己的喜好添加样式
                  - 给a标签注册点击事件, 打印内容

                */
                const list = [{
                        id: 1,
                        name: 'jack',
                        content: 'rose, you jump i jump'
                    },
                    {
                        id: 2,
                        name: 'rose',
                        content: 'jack, you see you, one day day'
                    },
                    {
                        id: 3,
                        name: 'tom',
                        content: 'jack,。。。。。'
                    }
                ]
                // const list = []

                const arr = list.map(item=>{
                    return <li key={item.id}><a href='' onClick={(e)=>{
                        //阻止默认事件
                        e.preventDefault();
                        // console.log(item.content)
                        //e.target事件目标,点击那里就获取到对应的对象
                        console.log(e.target.innerText)
                    }}><h3>{item.name}</h3><p>{item.content}</p></a></li>

                })
              
                  //1. 完成列表渲染
                  let ul = <ul>
                   {arr}
                </ul>
                //条件判断
                const data = arr.length > 0 ?ul:<h1>暂无评论</h1>
                //渲染
                ReactDOM.render(data,document.querySelector('#root'))
            </script>
  ```

- #### React的组件 

   -- 组件允许你将UI拆分为独立可复用的代码片段,并对每个片段进行独立构思.

   -- 组件从概念上类似于JavaScript函数。它接受任意的入参,并返回用于描述页面展示内容的React元素。

  **一个React应用就是由一个个的组件组成的** 

  - **创建方式** 

    - 函数组件(不能定义状态)

       **注意** ：

       --- 组件名首字母必须大写,因为react以此来区分组件和react元素。

       --- 必须要有返回值,返回的内容就是组件呈现的结构,如果返回值为null,表示不渲染任何内容。

       --- 组件内部如果有多个标签,必须使用一个根标签包裹,只能有一个根标签。 

      ```js
         function Header(){
                return <div>我是函数组件</div>
             }
             //渲染
             ReactDOM.render(<Header></Header>,document.getElementById('root'))
      ```

    - 类组件(可以定义状态 , 状态: 组件内部私有的数据)

       **注意** :

        --- 组件名首字母大写必须大写,因为react以此来区分组件和react元素。

        --- 类组件中必须要声明一个render函数。

        --- render函数中必须有返回值。

        --- 组件内部如果有多个标签,必须使用一个根标签包裹.只能有一个根标签。

        --- 类组件应该继承 React.Component 父类，从而可以使用父类中提供的方法或属性 。

      ```js
      class Header extends React.Component{
              render(){
                   return <div>我是类组件</div>
              }
            }

            //如果组件没有子节点,也可以写成自闭合标签
            ReactDOM.render(<Header/>,document.getElementById('root'))
      ```

      ​

  - **组件的状态State** 

     --  函数组件又叫做无状态组件(一般只负责渲染静态结构),类组件又叫做有状态组件(负责更新UI,让页面“动”起来)。

    - 基本使用

      -- 状态(state) 即数据, 是组件内部的私有数据, 只能在组件内部使用。

       -- state的值是对象, 表示一个组件可以有多个数据。

    - **获取** ：this.state

      ```js
          class Hello extends React.Component{
                    constructor(){
                      super()
                      this.state = {count=0}//初始化一个状态state
                    }
                 
                    render(){
                       return <div>{this.state.count}</div>
                     }
                }
      ```

    - 操作State

      -- this.setState({要修改的数据})

      ​    **setState的作用是: 1|修改state的值, 2|并更新UI**

      -- **注意** :不要直接修改state中的值, 应该使用组件实例的setState方法, 修改state的值

      ```js
         class Hello extends React.Component{
                     constructor(){
                       super()
                       this.state= {count:1}
                     }
                     
                     render(){
                     
                       return <div onClick={()={
                         this.setState({
                           count:this.state.count + 1
                         })
                       }}>{this.state.count}</div>
                     }
                }
      ```

  - **事件绑定的this指向问题**

     - **出现问题的原因** : 为了提高代码的阅读性,我们推荐把事件处理函数定义在结构的外面,但是这种情况下带来了this指向的问题

       ```js
       问题代码:
       class Hello extends React.Component {
           constructor() {
               super() 
               this.state = { count: 0, num: 100 }// 初始化state
           }

          //定义的普通函数,(babel编译jsx,采用的是严格模式,普通函数this就指向undefined)
           handle() {
               //这里this指向undefined
               this.setState({
                   count: this.state.count + 1
               })
           }

           render() {
             //这边直接将this.handle函数作为了事件函数
               return <div onClick={this.handle}>{this.state.count}</div>
           }
       }

       ```

     - 解决方法1 (解决this的指向)----箭头函数

       ```js
       class Hello extends React.Component {
           constructor() {
               super() 
               this.state = { count: 0, num: 100 }// 初始化state
           }

           handle() {
               //这里this指向类组件实例对象
               this.setState({
                   count: this.state.count + 1
               })
           }

           render() {
             //此时将箭头函数作为了事件函数,此时的handle是通过this类对象调用的，故handle中的this指向类实例对象
             return <div onClick={()=>{
                                  this.handle();
                                 }}>{this.state.count}</div>
           }
       }
       ```

     - 解决方法2 (解决this指向) ----bind

       ```js
       class Hello extends React.Component {
           constructor() {
               super() 
               this.state = { count: 0, num: 100 }// 初始化state
             //使用bind方法,利用bind的特性，赋值运算先算右边的，就是说将this.handle函数的this改为指向实例化对象,将返回的函数赋值给当前实例对象上的handle属性
               this.handle = this.handle.bind(this)
           }

        
           handle() {
               //通过bind方法改变了this指向,此时这里面的this指向组件实例
               this.setState({
                   count: this.state.count + 1
               })
           }

           render() {
             //这边直接将this.handle函数作为了事件函数
               return <div onClick={this.handle}>{this.state.count}</div>
           }
       }

       ```

     - 解决方法3 (解决this指向) ---- 类的实例方法

       ```js
       class Hello extends React.Component {
          // es7草案中,提案,如果要给当前类实例添加属性,就不需要写constructor了.应该使用下面的语法
           state = {
              count: 1
            }
          // 这样定义函数.这个函数,直接添加到了当前组件的实例身上
         // 注意:虽然是es7草案的语法.但是因为脚手架中使用了babel.所以可以放心使用
           handle = () => {
               //这是箭头函数本身没有this,所以会依次向父级函数寻找,此时这里this指向组件实例
               this.setState({
                   count: this.state.count + 1
               })
           }

           render() {
               return <div onClick={this.handle}>{this.state.count}</div>
           }
       }
       ```

  - **组件的props** 

     --- 组件是封闭的,要接收外部数据应该通过props来实现

    - **作用** : 接收外部传递给组件的数据

    - **传递数据方式** :给组件标签添加属性

    - **接收数据方式** : 函数组件通过props接收数据,类组件通过this.props接收数据

      ```js
      //在其他的组件中,使用了Header
      <Header name='jack' age={19} />

      //函数组件
      function Hello(props) { 
        console.log(props) 
        return ( 
          <div>接收到数据：{props.name}</div> 
        ) 
      } 

      //类组件
      class Hello extends React.Component { 
        render() { 
          return ( 
            <div>接收到的数据：{this.props.age}</div> 
          ) 
        } 
      } 
      ```

    - **props特点** 

      - **props是只读的对象,只能读取属性的值,不能修改props(修改报错)**。(主要记住)

      - 可以给组件传递任意类型的数据

      - **使用类组件,若写了constructor,应该将props传递给super(), 否则,无法在构造函数中获取到props** 

        ```js
        class Hello extends React.Component{
           constructor(props){
             //推荐将props传递给父类构造函数
             super(props)
           }
           
           render(){
             return <div>{this.props.age}</div>
           }
        }
        ```

    - **props校验** (函数组件和类组件都有校验规则)

      - **作用** : 使因为props导致的错误,可以给出明确的错误提示,增加组件的健壮性。

      - **实现方式**

        -- 导入prop-types包

        -- 给组件添加静态属性propTypes来给组件的props添加校验规则

        ```js
        /*常见类型：array、bool、func、number、object、string还有element(react元素)
          也会传组件*/
        // 必填项：isRequired 
        // 特定结构的对象：shape({  }) 

        //1、导包
        import PropTypes from 'prop-types'
        class Header extends React.Component{
          render(){
            return <div>{'测试props校验'}</div>
          }
        }
        //2、添加校验规则
        Header.propTypes = {
          //属性名:属性值得类型
          name:PropTypes.string ,// name属性,值为字符串类型
          list: PropTypes.array.isRequired,//传过来的list是一个数组且必填
          gender: PropTypes.oneOf(['男', '女']),//传过来的gender在两个中选择其中一个值
          obj: PropTypes.shape({
                color: PropTypes.string.isRequired,//这个参数为必传
                fontSize: PropTypes.number
              })//传进来一个特定结构的数据
          
        }
        ```

      - **props默认值** 

        -- 作用：给props设置默认值, 在未传入props时生效

        ```js
        //添加默认属性
        Header.defaultProps = {
            name:'lili'//这边定义默认属性,若有传值，则会覆盖这个属性，没有传值则显示这个属性，通过也可以通过props校验
        }
        ```

- ####表单处理

  - **受控组件(重要)** 

    -- js中的表单项的值被组件中的状态所控制,我们就叫受控组件。

    - 实现方式

      -- 在state中添加一个状态,作为表单元素的value值(有时复选框的checked也会依赖于state中的某个值)。(**控制表单元素值的来源**) 

      -- 给表单元素绑定change事件, 将表单元素的值 设置为state的值(**控制表单元素值得变化**)

      ```
      补充: 文本框、文本域、下拉框 操作value属性, 复选框 操作checked属性

      ```

      ​

    - ​

      ​

  - 1

  - 非受控组件(非受控组件直接操作dom)

     -- 借助于ref(ref的作用：获取DOM或组件), 使用原生DOM方式来获取表单元素值。

    - 实现方式

      -- 1、调用React.createRef() 方法创建一个ref对象

      ```js
      constructor() { 
        super() 
        //创建一个ref对象，存放在当前组件实例对象上
        this.txtRef = React.createRef() 
      }
      ```

      -- 2、将创建好的ref对象添加到文本框中

      ```js
      //将react元素与ref进行关联
      <input type="text" ref={this.txtRef} />
      ```

      -- 3、通过ref对象获取到文本框的值

      ```js
      //在哪里使用，就直接通过this.textRef.current获取当前dom,在通过value获取值
      Console.log(this.txtRef.current.value)
      ```

-  3


- 1

- ​


- 1

- 2

- 3

- 4

- 5

- 6

- 7

- 8

- ### 脚手架初始化项目

     - 创建脚手架方式

       - 方式一

         npm i create-react-app -g //全局安装

         create-react-app 项目名称

       - 方式二

          npx create-react-app 项目名称（项目名称不能有大写）

          这一行代码都做了哪些事情

         ​      1.先下载create-react-app 这个脚手架工具

         ​      2.使用脚手架工具下载项目(已经配置好的项目)

         ​      3.删除create-react-app这个脚手架工具

     - 项目的整体技术架构 :   react + webpack4 + es6 + eslint + babel

         -- publilc文件夹中必须要有一个index.html

         -- src文件夹里面必须要有一个index.js(入口文件)

     - 启动项目

       - yarn start

         --若之前有安装过yarn的话,就使用,一旦使用yarn后,在使用npm的话,那么这个项目之前下载过的依赖会在通过npm下载一遍。所以用了yarn后尽量不要npm。若没有yarn的话，可以一直使用npm。

     - ​

- ​

     ​

     ​
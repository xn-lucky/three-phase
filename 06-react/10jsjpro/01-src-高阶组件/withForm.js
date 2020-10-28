import React from 'react'

//返回一个函数，参数就是传进来接收数据的组件
export default function withForm(WrappedComponent){

    //返回一个组件，名字不重要，可以忽略，调用函数时，用变量接收，变量就是返回的组件
    return class extends React.Component{
        //在这边写传进来的组件公有的属性和方法

        /* 
           高阶组件问题2：使用了react-dev-tool插件后，可以在浏览器调试页面看到对应信息，但是由于返回的组件没有设置组件名所以调试页面看到的都是_temp,但是如果设置为Demo，那么看到的就全都是Demo,若使用高阶组件比较多，嵌套的也比较多的时候，找组件很麻烦（要见名知意）,可以给每个使用高阶组件设置不同的名字
        */
       //解决问题2:--->在静态属性上设置displayName,WrappedComponent.name可以获取组件的名字
       static displayName = 'with'+WrappedComponent.name

        state ={
            username:'',
            password:''
        }
        handleChange = name => e => {
              this.setState({
                [name]: e.target.value
              })
            }
          
        render(){
            /* 高阶组件问题1：若App想给login传递数据,要通过withLogin(因为App->withLogin->Login,App与Login是爷孙关系)
                解决-->  在withLogin组件中给Login传递数据，但是如果数据比较多的时候会比较麻烦,所以可以像state一样进行解构传值*/
            return (
            <WrappedComponent handleChange={this.handleChange} {...this.state} {...this.props} ></WrappedComponent>)
        }
    }
}
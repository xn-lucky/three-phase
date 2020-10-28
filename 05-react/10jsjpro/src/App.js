import React from 'react'

import Far from './pages/Far'

import PubSub from 'pubsub-js'

export default class App extends React.Component{
    state = {
        count:0
    }
    componentDidMount(){
        //一般是在组件挂载成功后，订阅
       
    }
    
    render(){
        return (
            <div>
                <Far/>
            </div>    
        )    
    }
} 

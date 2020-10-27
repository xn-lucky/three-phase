import React from 'react'
import Test from './Test'

export default class App extends React.Component{
    state = {
        count:0
    }
    render(){
        return (
            <div>
                {this.state.count>5?'':<Test/>}
               
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +2
                    })
                    console.log(this.state.count)
                }}>app中的按钮</button>
            </div>)
        
    }
} 
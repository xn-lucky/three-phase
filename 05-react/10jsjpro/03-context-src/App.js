import React from 'react'

import Far from './pages/Far'
import context from './context'

const {Provider,Consumer} = context

export default class App extends React.Component{
    state = {
        count:0
    }
    render(){
        return (
           <Provider value='123'>
            <div>
                <Far/>
            </div>
           </Provider>
        )    
    }
} 
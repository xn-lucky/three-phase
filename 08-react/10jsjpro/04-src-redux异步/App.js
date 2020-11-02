import React, { Component } from 'react'
import {Provider} from 'react-redux'

import WithTimer from './container/WithTimer'
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
             <div>
                App组件
                <WithTimer/>
             </div>
            </Provider>
        )
    }
}

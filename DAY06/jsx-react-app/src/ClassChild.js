import React, { Component } from 'react'
import CounterClassComponent from './CounterClassComponent'
class ClassChild extends Component {
    render() {
        return (
            <div>
                <h2>ClassChild</h2>
                <CounterClassComponent />
            </div>
        )
    }
}

export default ClassChild

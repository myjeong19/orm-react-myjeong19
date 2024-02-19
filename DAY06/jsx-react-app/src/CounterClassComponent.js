import React, { Component } from 'react'

export default class CounterClassComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        this.state = {
            count: 200,
            userName: '정민영',
            goods: [],
        }
    }

    handleIncrease = () => {
        console.log('증가')
        this.setState({
            count: this.state.count + 1,
        })
    }
    handleDescrease = () => {
        console.log('감소')
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrease}>증가</button>
                <button onClick={this.handleDescrease}>감소</button>
            </>
        )
    }
}

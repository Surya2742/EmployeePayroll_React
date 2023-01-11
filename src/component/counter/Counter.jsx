import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {counter:0};
    }

    onClickHandler=()=> {
        this.setState({counter : this.state.counter + 1});
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickHandler} >incre : {this.state.counter}</button>
            </div>
        );
    }
}

export default Counter;
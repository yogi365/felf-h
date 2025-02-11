import React from 'react'
export default class StateComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            count: 0,
            name: "abc"
        }
    }
    // count = 0;
    increment = () =>
    {
        console.log("Calling increment function");
        // console.log(this.state)
        // this.state.count = this.state.count + 1;
        setInterval(() =>
        {
            this.setState((prevState) => (
                { count: prevState.count + 1 })
            )
            console.log(this.state)
        }, 2000)

    }
    render()
    {
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Counter</button>
            </>
        )
    }
}
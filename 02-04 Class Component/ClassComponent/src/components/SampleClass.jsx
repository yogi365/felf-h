import React from 'react';
export default class SampleClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            counter: this.props.count
        }
    }

    render()
    {
        return (
            <div>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}
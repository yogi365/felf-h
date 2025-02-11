import React from 'react'

export default class extends React.Component
{

    render()
    {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
                <ul>
                    {
                        this.props.marks.map(mark =>
                        {
                            return <li>{mark}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
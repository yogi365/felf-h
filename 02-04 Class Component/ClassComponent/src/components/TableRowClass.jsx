import React, { Component } from 'react';
class TableRowClass extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (

            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.isActive}</td>
            </tr>
        )
    }
}

export default TableRowClass;
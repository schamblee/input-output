import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.strings.map((listItem, index) => (
            <li key={index}>{listItem}</li>
        ))
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
        )
    }
} 
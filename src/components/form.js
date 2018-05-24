import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.updateString(this.state.string)
    }

    render() {
        
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input onChange={(event) => {
                this.setState({ 
                    string: event.target.value
                    })
                 }} 
                / >
            <button type="submit">Click</button>
        </form>
        </div>
      )
    }
}
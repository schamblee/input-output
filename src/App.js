import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './components/form.js'
import List from './components/list.js'
import './App.css';

class App extends Component {
  state = {
    strings: []
  }


  updateString(string) {
    console.log(this.state)
    this.setState({
      strings: [...this.state.strings, string]
    })
  }

  render() {
    return (
      <div className="App">
        <Form updateString={this.updateString.bind(this)} />
        <List strings={this.state.strings}/>
      </div>
    );
  }
}

export default App;

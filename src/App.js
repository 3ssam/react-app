import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Person name="Ahmed" age="26" />
          <Person name="Essam" age="15" >i Love Music</Person>
          <Person name="Husien" age="70"/>
      </div>
    );
    // return React.createElement('div',{className:'App'}
    // ,React.createElement('div',null,'Hello my React APP')
    // ,React.createElement('Person',null));
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    counter:1
  }


  switchedHandler = () =>{
    console.log("Clicked!!!");
    
    this.setState({counter:5});
  }

  render() {
    return (
      <div className="App">
          <h1>Hi I am a  react app</h1>
          <p>Now it is working !!</p>
          <button onClick={this.switchedHandler}>Switch</button>
          <div>My state counter: {this.state.counter}</div>
          <Person name="Rohit" age="27">This is person</Person>
          <Person name="Saket" age="28"></Person>
      </div>
    );
  }
}

export default App;

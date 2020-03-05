import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component{




    switchedHandler = (name) =>{
      console.log("I am clicked", name)
    }

    render(){
      return (
        <div className="App">
            <h1>Hi I am a  react app</h1>
            <p>Now it is working !!</p>
            <button onClick={this.switchedHandler}>Switch</button>
            <div>My state counter: </div>
            <Person name="Rohit" age="27" click={this.switchedHandler.bind(this,'Rohit')}>This is person</Person>
            <Person name="Saket" age="28"></Person>
        </div>
      );
    }


    
}

export default App;

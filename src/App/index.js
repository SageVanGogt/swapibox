import React, { Component } from 'react';
import Button from './../Button/index';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSubject: ''
    };
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Button section={'people'}/>
          <Button section={'planets'}/>
          <Button section={'vehicles'}/>
        </nav>
      </div>
    );
  }
}

export default App;

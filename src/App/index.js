import React, { Component } from 'react';
import Button from './../Button/index';
import Api from './../api';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSection: '',
      currentRandomFilm: {},
      currentSectionData: []
    };
  }

  handleClickEvent = async (event) => {
    const { name } = event.target;

    switch (name) {
      case 'people': 
        let peopleData = new Api('https://swapi.co/api/people/').subject
        this.setState({currentSectionData: peopleData});
      break;
      case 'planets': 
        this.setState({currentSectionData: new Api('https://swapi.co/api/planets/').subject});
      break;
      case 'vehicles': 
        let vehicleData = await new Api('https://swapi.co/api/vehicles/').subject
        debugger
        this.setState({currentSectionData: vehicleData.subject});
      break;
      default: 
      console.log('nothing');
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Button section={'people'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'planets'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'vehicles'} handleClickEvent={this.handleClickEvent}/>
        </nav>
      </div>
    );
  }
}

export default App;

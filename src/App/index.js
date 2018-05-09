import React, { Component } from 'react';
import Button from './../Button/index';
import Film from './../Film/index';
import fetchApiData from './../api';
import { getRandomFilm } from './../helper';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentRandomFilm: {},
      currentSectionData: []
    };
  }

  async componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    const response = await fetch(url);
    const film = await response.json();
    const currentRandomFilm = getRandomFilm(film);

    this.setState({
      currentRandomFilm
    })
  }

  handleClickEvent = async (event) => {
    const { name } = event.target;
    const url = `https://swapi.co/api/${name}/`;
    const currentSectionData = await fetchApiData(url);
    
    this.setState({
      currentSectionData
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Button section={'people'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'planets'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'vehicles'} handleClickEvent={this.handleClickEvent}/>
        </nav>
        { 
          this.state.currentRandomFilm 
          && <Film 
          currentRandomFilm={this.state.currentRandomFilm}
          />
        }
      </div>
    );
  }
}

export default App;

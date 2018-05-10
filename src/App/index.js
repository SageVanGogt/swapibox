import React, { Component } from 'react';
import Button from './../Button/index';
import Film from './../Film/index';
import CardContainer from './../CardContainer/index';
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
    const film = await this.fetchFilm();
    const currentRandomFilm = await getRandomFilm(film);
    this.setState({
      currentRandomFilm
    })
  }

  fetchFilm = async () => {
    const url = 'https://swapi.co/api/films/'
    const response = await fetch(url);
    const film = await response.json();
    return film;
  }

  handleClickEvent = async (event) => {
    const { name } = event.target;
    const currentSectionData = await fetchApiData(name);
    
    await this.setState({
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
          this.state.currentRandomFilm && 
          <Film 
            currentRandomFilm={this.state.currentRandomFilm}
          />
        }
        {
          this.state.currentSectionData &&
          <CardContainer
            currentSectionData={this.state.currentSectionData}
          />
        }
      </div>
    );
  }
}

export default App;

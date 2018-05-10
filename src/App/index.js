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
      currentSectionData: [],
      currentFavorites: []
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
    if(name === 'show favorites') {
      const currentSectionData = this.state.currentFavorites;
      this.setState({
        currentSectionData
      })
    } else {
      const currentSectionData = await fetchApiData(name); 
      await this.setState({
        currentSectionData
      })
    }
  }

  handleFavorite = (event) => {
    const { value } = event.target;
    const currentFavorites = this.state.currentFavorites;
    const favoriteExists = currentFavorites.find(data => data.name === value);

    if(favoriteExists) {
      const favoriteIndex = currentFavorites.indexOf(favoriteExists);
      currentFavorites.splice(favoriteIndex, 1);
    } else {
      const chosen = this.state.currentSectionData.find(data => data.name === value)
      currentFavorites.push(chosen)
    }
    
    this.setState({
      currentFavorites
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Button section={'people'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'planets'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'vehicles'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'show favorites'} handleClickEvent={this.handleClickEvent}/>
        </nav>
        { 
          this.state.currentRandomFilm && 
          <Film 
            currentRandomFilm={this.state.currentRandomFilm}
          />
        }
        <img src="./assets/beerTap.png"/>
        {
          this.state.currentSectionData &&
          <CardContainer
            currentSectionData={this.state.currentSectionData}
            handleFavorite={this.handleFavorite}
          />
        }
      </div>
    );
  }
}

export default App;

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
      allData: {vehicles: [], planets: [], people: [], favorites: []}
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
    if(Object.values(this.state.allData[name]).length) {
      this.setStateToExistingData(name);
      return;
    }
   
    const currentSectionData = await fetchApiData(name); 
    const allData = {...this.state.allData, [name]: currentSectionData}
    await this.setState({
      currentSectionData, 
      allData
    })
  }

  setStateToExistingData = (name) => {
    const currentSectionData = this.state.allData[name];

    this.setState({
      currentSectionData
    })
  }

  handleFavorite = (event) => {
    const { value } = event.target;
    const favorites = this.state.allData.favorites;
    const favoriteExists = favorites.find(data => data.name === value);
    //includes filter out, if it does spread it in
    //refactor this area
    if(favoriteExists) {
      const favoriteIndex = favorites.indexOf(favoriteExists);
      favorites.splice(favoriteIndex, 1);
    } else {
      const chosenCard = this.state.currentSectionData.find(data => data.name === value)
      favorites.push(chosenCard)
    }
    const allData = {...this.state.allData, favorites}
    
    this.setState({
      allData
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Button section={'people'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'planets'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'vehicles'} handleClickEvent={this.handleClickEvent}/>
          <Button section={'favorites'} handleClickEvent={this.handleClickEvent}/>
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

import React, { Component } from 'react';
import Button from './../Button/index';
import Film from './../Film/index';
import CardContainer from './../CardContainer/index';
import fetchApiData from './../apiCalls/api';
import { getRandomFilm } from './../helper';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentRandomFilm: {},
      currentSectionData: [],
      allData: {vehicles: [], planets: [], people: [], favorites: [], favoriteCount: 0}
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
    try {
      const url = 'https://swapi.co/api/films/';
      const response = await fetch(url);
      const film = await response.json();
      return film;
    } catch(error) {
      const error = 'We had an issue grabbing you movie';
      const currentRandomFilm = error;
      this.setState({currentRandomFilm});
    }
  }

  handleClickEvent = async (event) => {
    const { name } = event.target;
    if(this.state.allData[name].length || name === 'favorites') {
      this.setStateToExistingData(name);
      return;
    }
   
    try {
      const currentSectionData = await fetchApiData(name); 
      const allData = {...this.state.allData, [name]: currentSectionData}
      await this.setState({
        currentSectionData, 
        allData
      })
    } catch(error) {
      const error = 'There was an error fetching data';
      const currentSectionData = error
      this.setState({currentSectionData})
    }
  }

  setStateToExistingData = (name) => {
    const currentSectionData = this.state.allData[name];

    this.setState({
      currentSectionData
    })
  }

  handleFavorite = (event) => {
    const { value } = event.target;
    const currentChosen = this.state.currentSectionData.find(data => data.name === value)
    const favorites = this.state.allData.favorites;
    const favoriteExists = favorites.find(data => data.name === value);
    //includes filter out, if it does spread it in
    //refactor this area
    currentChosen.favorited = !currentChosen.favorited;

    if(favoriteExists) {
      const favoriteIndex = favorites.indexOf(favoriteExists);
      favorites.splice(favoriteIndex, 1);
    } else {
      favorites.push(currentChosen)
    }
    const favoriteCount = favorites.length
    const allData = {...this.state.allData, favorites, favoriteCount}
    
    this.setState({
      allData
    })
  }

  render() {
    return (
      <div className="App">
        <img 
          src="/assets/cantina.jpg" 
          alt="cantina" 
          className="cantina-image"
        />
        <div className="nav-container">
          <nav>
            <Button 
              section={'people'} 
              handleClickEvent={this.handleClickEvent}
            />
            <Button 
              section={'planets'} 
              handleClickEvent={this.handleClickEvent}
            />
            <Button 
              section={'vehicles'} 
              handleClickEvent={this.handleClickEvent}
            />
            <Button 
              section={'favorites'} 
              handleClickEvent={this.handleClickEvent} 
              favoriteCount={this.state.allData.favoriteCount}
            />
          </nav>
          <img 
            src="./assets/beerTap.png" 
            alt="beertap navigation" 
            className="beer-nav"
          />
        </div>
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
            handleFavorite={this.handleFavorite}
          />
        }
      </div>
    );
  }
}

export default App;

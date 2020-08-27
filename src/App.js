import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import CharacterList from './components/CharacterList';


const baseUrl = "https://rickandmortyapi.com/api/character/"

export default class App extends React.Component{
  

  state = {
    characters: [],
    favorites: []
  }
  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => this.setState({characters: data.results}))
  }
  addFavorite = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character]
    })
  }
  
  render() {
    return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <Favorites favorites={this.state.favorites} />
      <CharacterList characters={this.state.characters} addFavorite={this.addFavorite}/>
    </div>
  );
}
}



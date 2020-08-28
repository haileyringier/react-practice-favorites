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
    if(!this.state.favorites.includes(character)){
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  removeFavorite = (character) => {
    let filtered =  this.state.favorites.filter(favorite => favorite !== character)
      this.setState({
        favorites: filtered
   })
  }

  permanentDelete = (character) => {
    let characters = this.state.characters.filter(c => c.id !== character.id)
    this.removeFavorite(character)
    this.setState({
      characters: characters
    })
  //  add fetch here
  }
  
  render() {
    return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <Favorites favorites={this.state.favorites} removeFavorite={this.removeFavorite} />
      <CharacterList 
        characters={this.state.characters} 
        addFavorite={this.addFavorite}
        permanentDelete={this.permanentDelete}/>
    </div>
  );
}
}



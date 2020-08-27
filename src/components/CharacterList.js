import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {

    const showCharacters = () => props.characters.map(character => <CharacterCard  character={ character } addFavorite={props.addFavorite}/>)
    
    return(
        <ul className="character-list">
            {showCharacters()}
        </ul>

    )
}
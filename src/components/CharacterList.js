import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {

    const showCharacters = () => props.characters.map(character => {
        return <CharacterCard  
                character={ character } 
                clickAction={props.addFavorite}
                permanentDelete={props.permanentDelete}/>
    })
    
    return(
        <ul className="character-list">
            {showCharacters()}
        </ul>

    )
}
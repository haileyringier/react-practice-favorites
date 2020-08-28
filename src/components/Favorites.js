import React from 'react'
import CharacterCard from './CharacterCard'

export default function Favorites(props) {

    const showFavorites = () => props.favorites.map(favorite => {
        return <CharacterCard 
                character={favorite} 
                clickAction={props.removeFavorite}
                favorite
                />
        }
    )

    return(
            <ul className={props.favorites.length ? "favorites" : "favorites initial-height"}>
                {showFavorites()}
            </ul>
        
    )
}
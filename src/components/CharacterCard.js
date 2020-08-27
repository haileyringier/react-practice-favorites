import React from 'react'

export default function CharacterCard(props) {

    const handleClick = (event) => {
        if(props.addFavorite){
            props.addFavorite(props.character)
        }
    }
    return(
        <li className="character-card" onClick={handleClick}>
           <img src={props.character.image} alt=""></img>
        </li>
    )
}
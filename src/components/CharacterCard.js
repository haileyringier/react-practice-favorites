import React from 'react'

export default function CharacterCard(props) {

    const handleClick = (event) => {
        props.clickAction(props.character)
    }

    const handleDeleteClick = (event) => {
        event.stopPropagation()
        props.permanentDelete(props.character)
    }
    return(
        <li className="character-card" onClick={handleClick}>
           <img src={props.character.image} alt=""></img>
           {!props.favorite? (
               <button className="delete" onClick={handleDeleteClick}>DELETE</button>
           ) : null }
        </li>
    )
}
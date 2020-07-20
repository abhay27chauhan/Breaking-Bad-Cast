import React from 'react';
import Card from '../card/card.component';
import Spinner from '../spinner/spinner.component'

function CardList({isLoading, characters}){
    return ( isLoading ? (<Spinner />) : 
        (<div className="cards">
            {characters.map(character => <Card key={character.char_id} character={character}/> )}
        </div>)
    )
}

export default CardList
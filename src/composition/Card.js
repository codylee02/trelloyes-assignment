import React from 'react';
import './Card.css';
import STORE from './store.js';

function Card(props) {


    
    //loop through each card Id Key

    const cards = props.cardIds.map((card) =>
    <div key={card} className="Card">
        <button type="button">delete</button>
        <h3>
            {STORE.allCards[card].title}
        </h3>
        <p>
            {STORE.allCards[card].content}
        </p>
    </div>
    )
    return (
        <div className="List-cards">
            {cards}
        
        <button type="button" class="List-add-button">
        + Add Random Card
        </button>
        </div>
    )

}

export default Card;
import React from 'react';
import Card from './Card.js';
import './List.css';


function List(props) {
    const headers = props.store.lists.map((item) => 
        <section key={item.header}  className="List">
        <header className="List-header"><h2>{item.header}</h2></header>
        <Card cardIds={item.cardIds}  />
        </section>
        
    );

    return (
        <div className="App-list">
        {headers}
        
        </div>
    );
}

export default List;
import React from 'react';
import './Card.css';

export default function Card(props) {
    // console.log(props.id)
    // console.log(props.listId)
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.handleDeleteItem(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.propTypes = {
    handleDeleteItem: () => {}
}
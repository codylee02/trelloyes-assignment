import React, { Component } from 'react';
import List from './composition/List'
import './App.css';
import STORE from './composition/store'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) => 
      key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
  );
}

class App extends Component {
  state = { store: STORE, };


  handleDeleteItem = (cardId) => {
    //console.log(id, listId)
    //console.log('handle delete item called')
    //go to store.lists.listId.cardIds(id) and delete it

    const { lists, allCards } = this.state.store;
    console.log({ lists, allCards }, 'consolelog of weird Const')

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }))

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })

    // const obj = this.state.STORE.allCards 

    // function omit(obj, keyToOmit) {
    //   return Object.entries(obj).reduce(
    //     (newObj, [key, value]) =>
    //         key === keyToOmit ? newObj : {...newObj, [key]: value},
    //     {}
    //   );
    // }
    
    // Example
    // const objectWithKVPs = {
    //   key: 'value',
    //   foo: 'foo value',
    //   bar: 'bar value',
    //   abc: { nested: 'object' }
    // }
    
    // To remove the foo key value pair
    // const newObjectWithKVPs = omit(obj, id);
    // console.log('newObject', newObjectWithKVPs)

    // //restructure store
    // const newStore = {
    //   lists: this.state.STORE.lists,
    //   allCards: newObjectWithKVPs
    // }

    // console.log(newStore, 'newStoreObj')

    // this.setState({STORE: newStore});
    // console.log(this.state, 'should be updated state')
    // this.forceUpdate();


  }

  handleRandomCard = (listId) => {
    const newCard = newRandomCard()
    console.log('new card = ', newCard)

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
	return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleDeleteItem={this.handleDeleteItem}
              handleRandomCard={this.handleRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

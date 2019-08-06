import React from 'react';
import List from './composition/List.js';
import './App.css';
import STORE from './composition/store.js';



function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      <List store={STORE} />
      </div>
    </main>
  );
}

export default App;
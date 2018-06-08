import React from 'react';
import logo from './logo.svg';
import './App.css';
import reduxComponent from './components/reduxComponent';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import {personalities, importances} from './data';

class App extends reduxComponent {

  render() {
    const { store } = this.context;
    var state = store.getState();

    console.log('state', state);    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Character Generator</h1>
        </header>
        {state.characterInfo.generated &&
          <Character />
        }
        {!state.characterInfo.generated &&
          <CharacterForm />
        }
      </div>
    );
  }
}

export default App;

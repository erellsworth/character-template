import React from 'react';
import './App.css';
import './colors.css';
import reduxComponent from './components/reduxComponent';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';

class App extends reduxComponent {

  render() {
    const { store } = this.context;
    var state = store.getState();
  
    return (
      <div className="App">
        <header className="asphalt">
          <h1 className="light-grey-text">Character Template</h1>
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

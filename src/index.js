import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import characterInfo from './reducers/characterInfo';
import personalityInfo from './reducers/personalityInfo';
import narrativeInfo from './reducers/narrativeInfo';

var reducers = combineReducers({
    characterInfo: characterInfo,
    personalityInfo: personalityInfo,
    narrativeInfo: narrativeInfo
});

const store = createStore(reducers);

function render () {   
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

store.subscribe(render);

render();
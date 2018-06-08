import React from 'react';
import reduxComponent from './reduxComponent';

class Character extends reduxComponent {

    clearForm(){   
    }

	render(){
	    const { store } = this.context;
	    var state = store.getState();	
	    	
		return <div>
            <h2>{state.characterInfo.importance}</h2>
            <hr/>
            <h3>{state.personalityInfo.personality_type} {state.personalityInfo.personality}</h3>
            <hr/>
            <h2>Narative:</h2>
            <h4>What they want</h4>
            <p>{state.want}</p>
            <button type="button" onClick={this.clearForm.bind(this)}>Start Over</button>
          </div>		
	}
}

export default Character;
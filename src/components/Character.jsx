import React from 'react';
import reduxComponent from './reduxComponent';

class Character extends reduxComponent {

    clearForm(){
        const { store } = this.context;
        store.dispatch({ type: 'reset_character'});    
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

            <h4>What they need</h4>
            <p>{state.need}</p>

            <h4>Internal Conflict</h4>
            <p>{state.internal_conflict}</p>

            <h4>External Conflict</h4>
            <p>{state.external_conflict}</p>

            <h4>Conflicts with other characters</h4>
            <p>{state.character_conflict}</p>

            <h4>Resolution</h4>
            <p>{state.resolution}</p>

            <h4>Impact</h4>
            <p>{state.impact}</p>                

            <button type="button" onClick={this.clearForm.bind(this)}>Start Over</button>
          </div>		
	}
}

export default Character;
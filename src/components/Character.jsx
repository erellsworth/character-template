import React from 'react';
import reduxComponent from './reduxComponent';

import {personalities} from '../data';

class Character extends reduxComponent {

    clearForm(){
        const { store } = this.context;
        store.dispatch({ type: 'reset_character'});    
    }

	render(){
	    const { store } = this.context;
	    var state = store.getState();	

        var personality_type = personalities.filter((p_type, index)=>{
                            return p_type.name === state.personalityInfo.personality;
                          })[0].types.filter((p_type, index)=>{
                            return p_type.name === state.personalityInfo.personality_type;
                          })[0];

		return <div>
            <h1>{state.characterInfo.name}</h1>
            <h2>{state.characterInfo.importance}</h2>
            <h3>{state.personalityInfo.personality_type} {state.personalityInfo.personality}</h3>
            <p>{personality_type.description}</p>
            <p><a href={personality_type.url} target="_blank">Read more...</a></p>

            <hr/>
            <h2>Narative:</h2>

            {state.narrativeInfo.want &&
                <div>
                    <h4>What they want</h4>
                    <p>{state.narrativeInfo.want}</p>                    
                </div>
            }

            {state.narrativeInfo.need &&
                <div>
                    <h4>What they need</h4>
                    <p>{state.narrativeInfo.need}</p>                  
                </div>
            }

            {state.narrativeInfo.internal_conflict &&
                <div>
                    <h4>Internal Conflict</h4>
                    <p>{state.narrativeInfo.internal_conflict}</p>                    
                </div>
            }

            {state.narrativeInfo.external_conflict &&
                <div>
                    <h4>External Conflict</h4>
                    <p>{state.narrativeInfo.external_conflict}</p>                    
                </div>
            }

            {state.narrativeInfo.character_conflict &&
                <div>
                    <h4>Conflicts with other characters</h4>
                    <p>{state.narrativeInfo.character_conflict}</p>                    
                </div>
            }

            {state.narrativeInfo.resolution &&
                <div>
                    <h4>Resolution</h4>
                    <p>{state.narrativeInfo.resolution}</p>                    
                </div>
            }

            {state.narrativeInfo.impact &&
                <div>
                    <h4>Impact</h4>
                    <p>{state.narrativeInfo.impact}</p>                     
                </div>
            }                                                                           

            <button type="button" onClick={this.clearForm.bind(this)}>Start Over</button>
          </div>		
	}
}

export default Character;
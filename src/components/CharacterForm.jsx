import React from 'react';
import reduxComponent from './reduxComponent';
import PersonalityInput from './PersonalityInput';

import {importances, personalities} from '../data';

const default_state = {
	  	updateAction: 'update_character_info'
	  }

class CharacterForm extends reduxComponent {

	constructor(props) {
		super(props);
		this.state = Object.assign({}, default_state);
	}	

	clearForm(){
		var newState = Object.assign({}, default_state);
		this.setState(newState);     
	}

	submitForm(){
		const { store } = this.context;
		store.dispatch({ type: 'generate_character'});
	}	

	render(){		
	    const { store } = this.context;
	    var state = store.getState();		
		return <div>
				<div className="flex-container">
		            {importances.map((importance, index)=>{
		            	var class_name = 'flex-item';
		            	if(state.characterInfo.importance === importance){
		            		class_name += ' turquoise';
		            	}
		             	return <h2 
		              			key={index}
		              			className={class_name} 
		              			onClick={this.updateValue.bind(this, 'importance', importance)}>
		              				{importance}
		              			</h2>
		            })}
	            </div>
	            <PersonalityInput/>

				<h2>Narrative (<a href="https://birthmoviesdeath.com/2013/07/03/film-crit-hulk-man-of-steel" rel="noopener noreferrer" target="_blank">See here</a>)</h2>
	            
	            <label>WHAT DOES THIS CHARACTER WANT?</label>
	            <textarea onChange={this.updateField.bind(this, 'want')}>{state.narrativeInfo.want}</textarea>

	            <label>WHAT DOES THIS CHARACTER NEED?</label>
	            <textarea onChange={this.updateField.bind(this, 'need')}>{state.narrativeInfo.need}</textarea>

	            <label>HOW DO THOSE WANTS AND NEEDS CONFLICT WITH EACH OTHER WITHIN THE CHARACTER?</label>
	            <textarea onChange={this.updateField.bind(this, 'internal_conflict')}>{state.narrativeInfo.internal_conflict}</textarea>
	            
	            <label>HOW DO THEY CONFLICT WITH THE OUTSIDE WORLD?</label>
	            <textarea onChange={this.updateField.bind(this, 'external_conflict')}>{state.narrativeInfo.external_conflict}</textarea>
	           
	            <label>HOW DO THEY CONFLICT WITH OTHER CHARACTERS?</label>
	            <textarea onChange={this.updateField.bind(this, 'character_conflict')}>{state.narrativeInfo.character_conflict}</textarea>
	            
	            <label>HOW DOES THE CHARACTER CHANGE THROUGH THOSE CONFLICTS AND HOW DOES THE RESOLUTION AFFECT THEM?</label>
	            <textarea onChange={this.updateField.bind(this, 'resolution')}>{state.narrativeInfo.resolution}</textarea>
	            
	            <label>WHAT IMPACT DOES THAT CHANGE HAVE ON EVERYONE ELSE?</label>
	            <textarea onChange={this.updateField.bind(this, 'impact')}>{state.narrativeInfo.impact}</textarea>

	            <hr/>
	            <button type="button" onClick={this.submitForm.bind(this)}>Go</button>	                        
            </div>		
	}
}
export default CharacterForm;
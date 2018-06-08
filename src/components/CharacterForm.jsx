import React from 'react';
import reduxComponent from './reduxComponent';

import {importances, personalities} from '../data';

const default_state = {
	  	updateAction: 'update_character_info'
	  }
	  
class CharacterForm extends reduxComponent {

	constructor(props) {
	  super(props);
	  this.state = Object.assign({}, default_state);
	}	

	updateValue(field,value){
		super.updateValue(field,value);
	}

	clearForm(){
	  var newState = Object.assign({}, default_state);
	  this.setState(newState);     
	}

	submitForm(){
	  console.log(this.state);
	  var newState = Object.assign({}, this.state, {character_generated: true});
	  this.setState(newState);     
	}	

	render(){		
	    const { store } = this.context;
	    var state = store.getState();		
		return <div>
	            {importances.map((importance, index)=>{
	              return <p onClick={this.updateValue.bind(this, 'importance', importance)} key={index}>{importance}</p>
	            })}

	            <h2>Personality Type (<a href="https://www.16personalities.com/personality-types" rel="noopener noreferrer" target="_blank">See Here</a>)</h2>
	            <select onChange={this.updateField.bind(this, 'personality')}>
	              {personalities.map((p_type, index)=>{
	                return <option key={index} value={p_type.name}>{p_type.name}</option>
	              })}
	            </select>
	            <h3>sub type</h3>
	            <select onChange={this.updateField.bind(this,'personality_type')}>
	              {personalities.filter((p_type, index)=>{
	                return p_type.name === state.personalityInfo.personality;
	              })[0].types.map((p_type, index)=>{
	                return <option key={index} value={p_type.name}>{p_type.name}</option>
	              })}
	            </select>	
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
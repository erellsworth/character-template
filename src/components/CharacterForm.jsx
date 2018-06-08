import React from 'react';
import reduxComponent from './reduxComponent';
import PersonalityInput from './PersonalityInput';
import NarrativeInput from './NarrativeInput';

import {importances} from '../data';

const default_state = {
	  	updateAction: 'update_character_info'
	  };

class CharacterForm extends reduxComponent {

	constructor(props) {
		super(props);
		this.state = Object.assign({}, default_state);
	}	

	submitForm(){
		const { store } = this.context;
		store.dispatch({ type: 'generate_character'});
	}	

	render(){		
	    const { store } = this.context;
	    var state = store.getState();		
		return <div>
				<label>Name:</label>
				<input type="text" onChange={this.updateField.bind(this, 'name')} value={state.characterInfo.name}/>

				<div className="flex-container">
		            {importances.map((importance, index)=>{
		            	var class_name = 'button flex-item';
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
	            <PersonalityInput />

				<NarrativeInput />
				
	            <hr/>
	            <button type="button" onClick={this.submitForm.bind(this)}>Go</button>	                        
            </div>		
	}
}
export default CharacterForm;
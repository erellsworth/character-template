/*
#TODO: possible integration with traitify.com api
*/
import React from 'react';
import reduxComponent from './reduxComponent';

import {personalities} from '../data';

const default_state = {
	  	updateAction: 'update_personality_info',
	  	personality_selected: false
	  }

class PersonalityInput extends reduxComponent {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, default_state);
	}	

	updatePersonality(field,value){
		super.updateValue(field,value);
		var newState = Object.assign({}, this.state, {personality_selected: true}); 
		this.setState(newState);
	}

	render(){
	    const { store } = this.context;
	    var state = store.getState();			
		return <div>
	            <h2>Personality (<a href="https://www.16personalities.com/personality-types" rel="noopener noreferrer" target="_blank">?</a>)</h2>
	            <div className="flex-container top">
	              {personalities.map((p_type, index)=>{
	              	var class_name = 'button flex-item';
					if(this.state.personality_selected && state.personalityInfo.personality === p_type.name){
						class_name += ' turquoise';
					}	              	
	                return <h3 
		                	className={class_name}
		                	onClick={this.updatePersonality.bind(this, 'personality', p_type.name)}
		                	key={index}>
	                		{p_type.name}
	                	</h3>
	              })}
	            </div>
	            {this.state.personality_selected &&
	            	<div>
			            <h3>Personality type:</h3>
			            <div className="flex-container top">
			              {personalities.filter((p_type, index)=>{
			                return p_type.name === state.personalityInfo.personality;
			              })[0].types.map((p_type, index)=>{
			              	var class_name = 'button flex-item';
							if(state.personalityInfo.personality_type === p_type.name){
								class_name += ' blue';
							}

			               	return <div>
				               		<div 
				               		className={class_name} 
				               		key={index} 
				               		onClick={this.updateValue.bind(this,'personality_type', p_type.name)}>
					               		<h4>{p_type.name}</h4>
					                	<p>{p_type.description}</p>
				                	</div>
				                	<p><a href={p_type.url} target="_blank">Read more</a></p>
			                	</div>
			              })}
			            </div>	            	
	            	</div>
	            }
		</div>
	}	

}

export default PersonalityInput;
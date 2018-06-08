import React from 'react';
import reduxComponent from './reduxComponent';

import {importances, personalities} from '../data';

const default_state = {
	  	updateAction: 'update_personality_info'
	  }

class PersonalityInput extends reduxComponent {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, default_state);
	}	

	render(){
	    const { store } = this.context;
	    var state = store.getState();			
		return <div>
	            <h2>Personality (<a href="https://www.16personalities.com/personality-types" rel="noopener noreferrer" target="_blank">See Here</a>)</h2>
	            <div className="flex-container top">
	              {personalities.map((p_type, index)=>{
	              	var class_name = 'flex-item';
					if(state.personalityInfo.personality === p_type.name){
						class_name += ' turquoise';
					}	              	
	                return <h3 
		                	className={class_name}
		                	onClick={this.updateValue.bind(this, 'personality', p_type.name)}
		                	key={index}>
	                		{p_type.name}
	                	</h3>
	              })}
	            </div>
	            <h3>Personality type:</h3>
	            <div className="flex-container top">
	              {personalities.filter((p_type, index)=>{
	                return p_type.name === state.personalityInfo.personality;
	              })[0].types.map((p_type, index)=>{
	              	var class_name = 'flex-item';
					if(state.personalityInfo.personality_type === p_type.name){
						class_name += ' blue';
					}

	               	return <div className={class_name} key={index}>
		               		<h4 
		                			               		
		                		onClick={this.updateValue.bind(this,'personality_type', p_type.name)}>
		                			{p_type.name}
		                	</h4>
		                	<p>{p_type.description}</p>
	                	</div>
	              })}
	            </div>
		</div>
	}	

}

export default PersonalityInput;
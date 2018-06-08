import {personalities} from '../data';

function personalityInfo(state = {}, action){
	var default_state = {
		personality: personalities[0].name,
      	personality_type:personalities[0].types[0].name,		
	};

	state = Object.assign(default_state, state);

	var method = {
		generate_character: function(){
			return Object.assign(state, {generated: true});	
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default personalityInfo;
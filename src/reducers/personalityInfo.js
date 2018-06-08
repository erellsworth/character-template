import {personalities} from '../data';

function personalityInfo(state = {}, action){
	var default_state = {
		personality: personalities[0].name,
      	personality_type:personalities[0].types[0].name,		
	};

	state = Object.assign({}, default_state, state);

	var method = {
		reset_character: function(){
			return default_state;	
		},		
		update_personality_info: function(){
			console.log('update_personality_info');
		    var newState = {};
		    newState[action.field] = action.value;
			return Object.assign(state, newState);		
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default personalityInfo;
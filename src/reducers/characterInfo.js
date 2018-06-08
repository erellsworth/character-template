import {importances} from '../data';

function characterInfo(state = {}, action){
	
	var default_state = {
		generated: false,
		importance: importances[0]
	};

	state = Object.assign(default_state, state);

	var method = {
		generate_character: function(){
			return Object.assign(state, {generated: true});	
		},
		update_character_info: function(){
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

export default characterInfo;
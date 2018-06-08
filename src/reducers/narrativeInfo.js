function narrativeInfo(state = {}, action){

	var method = {
		reset_character: function(){
			return {};	
		},		
		update_narrative_info: function(){
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

export default narrativeInfo;
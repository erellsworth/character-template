function narrativeInfo(state = {}, action){

	var method = {
		reset_character: function(){
			return {};	
		},		
		set_narrative_info: function(){
			state[action.key] = action.value;
			return state	
		}
	}

	if(method.hasOwnProperty(action.type)){
		return method[action.type]();
	}

	return state;
}

export default narrativeInfo;
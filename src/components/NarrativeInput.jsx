import React from 'react';
import reduxComponent from './reduxComponent';

const default_state = {
	  	updateAction: 'update_narrative_info'
	  }

class NarrativeInput extends reduxComponent {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, default_state);
	}	

	render(){
	    const { store } = this.context;
	    var state = store.getState();			
		return <div>
	            <h2>Narrative (<a href="https://birthmoviesdeath.com/2013/07/03/film-crit-hulk-man-of-steel" rel="noopener noreferrer" target="_blank">?</a>)</h2>
	            
	            <label>What does this character want?</label>
	            <textarea onChange={this.updateField.bind(this, 'want')}>{state.narrativeInfo.want}</textarea>

	            <label>What does this character need?</label>
	            <textarea onChange={this.updateField.bind(this, 'need')}>{state.narrativeInfo.need}</textarea>

	            <label>How do those wants and needs conflict with each other within the character?</label>
	            <textarea onChange={this.updateField.bind(this, 'internal_conflict')}>{state.narrativeInfo.internal_conflict}</textarea>
	            
	            <label>How do they conflict with the outside world?</label>
	            <textarea onChange={this.updateField.bind(this, 'external_conflict')}>{state.narrativeInfo.external_conflict}</textarea>
	           
	            <label>How do they conflict with other characters?</label>
	            <textarea onChange={this.updateField.bind(this, 'character_conflict')}>{state.narrativeInfo.character_conflict}</textarea>
	            
	            <label>How does the character change through those conflicts and how does the resolution affect them?</label>
	            <textarea onChange={this.updateField.bind(this, 'resolution')}>{state.narrativeInfo.resolution}</textarea>
	            
	            <label>What impact does that change have on everyone else?</label>
	            <textarea onChange={this.updateField.bind(this, 'impact')}>{state.narrativeInfo.impact}</textarea>
		</div>
	}	

}

export default NarrativeInput;
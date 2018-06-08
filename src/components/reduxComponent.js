import { Component } from 'react';
import PropTypes from 'prop-types';

class reduxComponent extends Component {

	constructor(props) {
	  super(props);
	  this.state = {updateAction: false};
	}	

	componentDidMount(){
		const { store } = this.context;

		if(typeof store !== 'undefined'){
			this.unsubscribe = store.subscribe(() => {
				this.forceUpdate();
			});		
		}
	}

	componentWillUnmount(){
		if(typeof this.unsubscribe === 'function'){
			this.unsubscribe();
		}
	}

	updateField(field,e){
		if(!this.state.updateAction){ return false; }
		const { store } = this.context;
	  	var value = e.target.value;
	  	store.dispatch({ type: this.state.updateAction, field, value });
	}

	updateValue(field,value){
		if(!this.state.updateAction){ return false; }
		const { store } = this.context;
	  	store.dispatch({ type: this.state.updateAction, field, value }); 
	}		
}

reduxComponent.contextTypes = {
	store: PropTypes.object
};

export default reduxComponent;
import React from 'react';
import InputTask from './InputTask';
import BtnSubmitTask from './BtnSubmitTask';

class AddTask extends React.Component {

	addTask(p_text) {
		this.props.store.dispatch({
			id: this.props.store.getState().length,
			type: 'ADD_TASK',
			text: p_text
		})
		console.log(this.props.store.getState());
	}
	
	render() {
		return(
			<div>
				<div className="row">
					<InputTask />
				</div>
				<div className="row">
					<BtnSubmitTask onClick={this.addTask.bind(this)} />
				</div>
			</div>
		)
	}
}
			
export default AddTask;
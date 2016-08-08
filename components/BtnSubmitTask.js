import React from 'react';

class BtnSubmitTask extends React.Component {
	
	addTask() {
		var inputNewTask = document.getElementById('newTask')
		
		if(inputNewTask.value !== "") {
			var text = inputNewTask.value
			this.props.onClick(text)
			inputNewTask.value = ""	
		} else {
			alert("Preencha o campo antes de continuar")
		}
		
	}
	
	constructor(props) {
		super(props)
		
		this.addTask = this.addTask.bind(this)
	}

	render() {
		return(
			<div className="row">
				<a className="waves-effect waves-light btn" onClick={this.addTask}>Add Task</a>
			</div>
		)
	}
}

export default BtnSubmitTask;

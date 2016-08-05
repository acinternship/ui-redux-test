import React from 'react';
import ListTaskItem from './ListTaskItem';

class ListTask extends React.Component {
	
	onToggleTask(p_id) {
		this.props.store.dispatch({
			type: 'TOGGLE_TASK',
			id: p_id
		})
		console.log(this.props.store.getState())
	}
	
	onDeleteTask(p_id) {
		this.props.store.dispatch({
			type: 'DELETE_TASK',
			id: p_id
		})
	}
	
	onClickUpItem(p_id) {
		this.props.store.dispatch({
			type: 'UP_TASK',
			id: p_id
		})
		
		console.log(this.props.store.getState())
	}
	
	onClickDownItem(p_id) {
		this.props.store.dispatch({
			type: 'DOWN_TASK',
			id: p_id
		})
	}
	
	constructor(props) {
		super(props)
		
		this.onToggleTask = this.onToggleTask.bind(this)
		this.onDeleteTask = this.onDeleteTask.bind(this)
	}
	
	render() {
		let rows = this.props.store.getState().map(
      	task => {
				if(!task.deleted) {
					return <ListTaskItem key={task.id} task={task} onToggleTask={this.onToggleTask} onDeleteTask={this.onDeleteTask} onClickUpItem={this.onClickUpItem.bind(this)} onClickDownItem={this.onClickDownItem.bind(this)} />	
				}
				
			}
    	)
		return(
			<ul id="listTask" className="collection with-header">
				{rows}
			</ul>
            
		)
	}
}

export default ListTask;
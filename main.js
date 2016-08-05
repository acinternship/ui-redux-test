import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

const reducer = (state = [], action) => {

	switch (action.type) {	  
		case 'ADD_TASK':
			var v_category
		
			if(action.id % 2 === 0) {
				v_category = "Avenue Code"
			} else if (action.id % 3 === 0){
				v_category = "Client"
			} else {
				v_category = "PUC Minas - Coreu"
			}
			return [
				...state,
				{
					id: action.id,  
					text: action.text,
					category: v_category,
					deleted: false,
					completed: false
				}
			];
			
		case 'TOGGLE_TASK':
			return state.map(task => {
				if(task.id !== action.id) {
					return task
				}
				
				return { ...task, completed: !action.completed}
			});
	
		case 'DELETE_TASK':
			return state.map(task => {
				if(task.id === action.id) {
					return { ...task, deleted: !action.deleted }
				} 
				
				return task
			});
			
		case 'EDIT_TASK':
			return state.map(task => {
				if(task.id === action.id) {
					return {...task, text: action.text}
				}
				
				return task
			});
			
		case 'UP_TASK':
			var tmpId = 0
			var final = state.map(task => {
				if(!task.deleted) {
					if(task.id < action.id && task.id > tmpId) {
						tmpId = task.id	
					}
				}
				
				return task
			})
			
			var tmpTask = final[tmpId].text
			final[tmpId].text = final[action.id].text
			final[action.id].text = tmpTask
			
			tmpTask = final[tmpId].completed
			final[tmpId].completed = final[action.id].completed
			final[action.id].completed = tmpTask
			
			tmpTask = final[tmpId].category
			final[tmpId].category = final[action.id].category
			final[action.id].category = tmpTask
			
			return final;
      
		case 'DOWN_TASK':
			var tmpId = state.length - 1

			var final = state.map(task => {
				if(!task.deleted) {
					if(task.id > action.id && task.id < tmpId) {
						tmpId = task.id	
					}
				}
				
				return task
			})
			
			var tmpTask = final[tmpId].text
			final[tmpId].text = final[action.id].text
			final[action.id].text = tmpTask
			
			tmpTask = final[tmpId].completed
			final[tmpId].completed = final[action.id].completed
			final[action.id].completed = tmpTask
			
			tmpTask = final[tmpId].category
			final[tmpId].category = final[action.id].category
			final[action.id].category = tmpTask
			
			
			return final;
    default:
      return state;
  }
}

const store = createStore(reducer)

const Main = () => {  
	console.log(store.getState())
	ReactDOM.render(
		<App store={store} />, document.getElementById('app')
	)
}

store.subscribe(Main)
Main()
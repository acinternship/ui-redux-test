import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';

const reducer = (state = [], action) => {

	switch (action.type) {	  
		case 'ADD_TASK':
			return [
				...state,
				{
					id: action.id,  
					text: action.text,
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
			
		case 'UP_TASK':
			var tmpId = 0
			var final = state.map(task => {
				if(!task.deleted) {
					if(task.id < action.id) {
						if(task.id > tmpId) {
							tmpId = task.id	
						}
					}
				}
				
				return task
			})
			
			var tmpTask = final[tmpId].text
			final[tmpId].text = final[action.id].text
			final[action.id].text = tmpTask
			
			return final;
      
		case 'DOWN_TASK':
			var tmpId = state.length - 1

			var final = state.map(task => {
				if(!task.deleted) {
					if(task.id > action.id) {
						if(task.id < tmpId) {
							tmpId = task.id	
						}
					}
				}
				
				return task
			})
			
			var tmpTask = final[tmpId].text
			final[tmpId].text = final[action.id].text
			final[action.id].text = tmpTask
			
			return final;
    default:
      return state;
  }
}

const store = createStore(reducer)

const Main = () => {  
  ReactDOM.render(
    <App store={store} />, document.getElementById('app')
  )
}

store.subscribe(Main)
Main()
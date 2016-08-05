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
				} else {
					return { ...task, completed: !action.completed}
				}
			});
	
		case 'DELETE_TASK':
			return state.map(task => {
				if(task.id === action.id) {
					return { ...task, deleted: !action.deleted }
				} else {
					return task
				}
			});
      
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
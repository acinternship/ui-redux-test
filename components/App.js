import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';


class App extends React.Component {
	render() {
		return(
			<div>
				<AddTask store={this.props.store} />
				<ListTask store={this.props.store} />
			</div>
		)
	}
}

export default App;

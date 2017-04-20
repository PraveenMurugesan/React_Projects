import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
/*
react-redux library is hte communication channel between react and redux
Provider is the one that helps to communicate the state information available in redux to react 
*/

const App = () => {
	/*
	Provider tag can have only one child.
	So create a View and populate rest inside view.
	*/
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
/*
When the application boots up, the index.js file in the reducer runs
Further explanation in that file
*/
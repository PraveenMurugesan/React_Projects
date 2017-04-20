import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
	const config = {
		    apiKey: 'AIzaSyAJ5d8Ol04rgPDDUA2Id_OMpOG6AWcw3c0',
		    authDomain: 'manager-a5e3d.firebaseapp.com',
		    databaseURL: 'https://manager-a5e3d.firebaseio.com',
		    projectId: 'manager-a5e3d',
		    storageBucket: 'manager-a5e3d.appspot.com',
		    messagingSenderId: '892451072118'
	  };
	  firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(thunk));
		// {} - for any initial state passing, optional one
		// Third parameter - store enhancer, because it enhancest the store by adding additonal features
		//middleware is used to make ReduxThunk to work
		return (
			<Provider store={store}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		);
	}
}

export default App;

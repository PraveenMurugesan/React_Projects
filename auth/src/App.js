import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common'; 
//Takes Header from index.js in the referred folder
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

	state = { loggedIn: null }; 
	
	componentWillMount() {
	 firebase.initializeApp({
	    apiKey: 'AIzaSyBbeS6Qmd6cTkb3rLy68TZbgxXiuFenqEo',
	    authDomain: 'auth-a8882.firebaseapp.com',
	    databaseURL: 'https://auth-a8882.firebaseio.com',
	    projectId: 'auth-a8882',
	    storageBucket: 'auth-a8882.appspot.com',
	    messagingSenderId: '1096072377840'
	 });

	 firebase.auth().onAuthStateChanged((user) => {
	 	if (user) {
	 		this.setState({ loggedIn: true });
	 	} else {
	 		this.setState({ loggedIn: false });
	 	}
	 });
	}

	renderContent() {
		//Card Section has been added in addition to the things given in the video
		switch (this.state.loggedIn) {
			case true:
				return (
				<CardSection>
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				</CardSection>
			);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;

		}
	}


	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

// const styles = {
// 	containerStyle: {
// 		flexDirection: 'column'
// 	}
// };

module.exports = App;

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		
		const { email, password } = this.state;
		
		this.setState({ error: '', loading: true });


		firebase.auth().signInWithEmailAndPassword(email, password)
		 .then(this.onSuccessLoginOrUserCreation.bind(this))
		 .catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			 .then(this.onSuccessLoginOrUserCreation.bind(this))
			 .catch(this.onFailureLoginOrUserCreation.bind(this));
		});
	}

	onSuccessLoginOrUserCreation() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onFailureLoginOrUserCreation() {
	this.setState({
		loading: false,
		error: 'Authentication Failed!!!'
	});
	}
	renderButtonOrSpinner() {
		if (this.state.loading) {
			return (
				<Spinner size='small' />
			);
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}	

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email" 
						onChangeText={text => this.setState({ email: text })}
						placeholder="User Email"
						value={this.state.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password" 
						onChangeText={text => this.setState({ password: text })}
						placeholder="password"
						secureTextEntry={true}
						value={this.state.password}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButtonOrSpinner()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

module.exports = LoginForm;

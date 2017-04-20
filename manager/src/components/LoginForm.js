import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	
	onEmailChange(text) {
		//Call action createors
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		//Call action createors
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email" 
						placeholder="User Email ID"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email} 
					/>
				</CardSection>
				<CardSection>
					<Input 
						label="Password" 
						placeholder="password"  
						secureTextEntry
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Button onButtonPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.mail,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);

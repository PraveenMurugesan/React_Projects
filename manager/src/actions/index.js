import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

/* 
Asynchronous action creator. Uses redux thunk
loginUser returns the function. The function is performing operation of signing - in
Once signed in , then it dispatches teh function manually
*/
export const loginUser = ({ email, password }) => {
	return (dispatch) => {
	firebase.auth().signinWithEMailAndpassword(email, password)
		.then(user => {
			dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });		
		});
	};
};


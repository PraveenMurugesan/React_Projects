import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };
export default (state = INITIAL_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }; //this statement creates a copy of the state and overwrites the email property of the newly created state
			/*
			A new state is created because internally, React Native
			compares the old state and new state to find wheher something has been modified to 
			confirm rerendering. If the change has been made to the state variable itself, the equlaity comparison
			always return true. To avoid it, a new state is created.
			*/
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		default:
			return state;
	}
};

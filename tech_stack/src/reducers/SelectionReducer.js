/*
Any reducer takes in 2 arguments state, action

state will have default value null, so that the first time it gets called 
wont produce an error because of being undefined whenever the app opens up
*/
export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};


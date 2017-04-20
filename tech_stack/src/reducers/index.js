import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/*
Combine reducers are used to combine all the reducers and to help application work appropriately
*/
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
	/*
	When the application boots up, the Library reducer runs once and retieves data from the json,
	and populates the libraries state.
	*/

	/*
	Since libraries is assigned with LibraryReducer,
	the application inturn will have a state called libraries
	*/


	/*
	Application lists the various libraries available and also
	provides description of currently selected library.

	So the application needs 2 variables in state
	1. List of Items
	2. Currently selected item

	Similarly there must be 2 reducer for the respective ones
	1. Library reducer: that provides the list of libraries
			Each item in the list consists of
				Id, Name and Description
	2. Selection reducer: that provides the id of of the currently selected library
	*/
});

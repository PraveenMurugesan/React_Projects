export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};

//The selectLibrary function is called a action creator
//return block is the action

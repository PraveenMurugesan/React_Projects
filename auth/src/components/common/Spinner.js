import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ spinnerSize }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={spinnerSize || 'large'} />
		</View>
	);
};

/*
ActivityIndicator specified above has a property called size
it takes an argument spinnerSize. If passed, then it takes the value, 
if not by default it will be large
*/

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};
export { Spinner };

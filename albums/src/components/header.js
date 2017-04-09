import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
	
	const { textStyle, viewStyle } = styles;
	
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{ props.headerText }</Text>
		</View>
	); 
};

const styles = {
	viewStyle: {
		backgroundColor: '#E8E8E8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		
		//shadow properties not working in android. Elevation is the work-around
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 15 },
		shadowOpacity: 0.8,
		
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

module.exports = Header;

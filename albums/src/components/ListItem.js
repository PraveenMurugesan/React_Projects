import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ListItem = ({ album }) => {
	const { artist, image, title, thumbnail_image, url } = album;
	const { headerImageStyle, headerImageContainerStyle, 
		headerTextContainerStyle, headerTitleTextStyle, imageStyle } = styles;
	return (
		<Card>
			
			<CardSection>
				<View style={headerImageContainerStyle}>
					<Image 
						style={headerImageStyle}
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerTextContainerStyle}>
					<Text style={headerTitleTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			
			<CardSection>
				<Image
			     	style={imageStyle}
				 	source={{ uri: image }} 
				 />
			</CardSection>
			
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
		);
};

const styles = {
	headerTextContainerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTitleTextStyle: {
		fontSize: 18
	},
	headerImageStyle: {
		height: 50,
		width: 50
	},
	headerImageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};


export default ListItem;

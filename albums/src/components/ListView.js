import React from 'react';
import { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';

class ListView extends Component {

	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
	}


	renderAlbums() {
		return this.state.albums.map(album => 
			<ListItem key={album.title} album={album} />
			);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

module.exports = ListView;

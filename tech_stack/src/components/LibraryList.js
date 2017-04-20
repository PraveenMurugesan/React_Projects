import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}
	
	renderRow(library) {
		return <ListItem library={library} />;
	}
	
	render() {
		return (
			<ListView
			dataSource={this.dataSource}
			renderRow={this.renderRow}
			/>
		);
	}
}

/*
This function gets called when the library list tag is referred in App component
since the connect function in bounded to mapStateToProps function
*/
const mapStateToProps = (state) => {
	/*
	This return statement returns the state is the props variable of this class
	So props variable can be used to render the retrieved list from the store in the render function
	*/
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

/*
connect function is the one that connects this component with that of the redux data store.
Refer screenshot in screenshots folder
*/
